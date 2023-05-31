from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import CustomUser
from .serializers import UserSerializer, serializers


class UserInfoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        # Uso do serializer personalizado para o usuário
        serializer = UserSerializer(user)
        return Response(serializer.data)


class UserListCreateAPIView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def get_serializer_class(self):
        if self.request.method == 'POST':
            # Use a serializer with limited fields for POST requests
            return CreateUserSerializer
        return self.serializer_class


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'password']

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user


class UserRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Retorna o usuário atualmente autenticado
        return self.request.user


class UserDeleteAPIView(generics.DestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


class UserRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class UserListAPIView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class UserDetailAPIView(generics.RetrieveAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


# Utilização de JWT
class ObtainTokenPairView(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializer
    pass


class TokenObtainPairSerializer(TokenObtainPairSerializer):
    username_field = 'email'


class RefreshTokenView(TokenRefreshView):
    pass


    
@api_view(['POST'])
def rate_user(request, pk):
    try:
        user = CustomUser.objects.get(pk=pk)
    except CustomUser.DoesNotExist:
        return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)

    if user == request.user:
        return Response({'error': 'You cannot vote for yourself.'}, status=status.HTTP_400_BAD_REQUEST)

    rating = request.data.get('rating')
    if rating is None or not isinstance(rating, (int, float)) or rating < 0 or rating > 5:
        return Response({'error': 'Invalid rating. Rating should be a number between 0 and 5.'}, status=status.HTTP_400_BAD_REQUEST)

    user.total_rating += rating
    user.num_ratings += 1
    user.average_rating = user.total_rating / user.num_ratings
    user.save()

    return Response({'success': 'Vote recorded.'}, status=status.HTTP_201_CREATED)