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
    '''
    Fornece informações do usuário autenticado.
    '''
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        # Uso do serializer personalizado para o usuário
        serializer = UserSerializer(user)
        return Response(serializer.data)


class UserListCreateAPIView(generics.CreateAPIView):
    '''
    Cria novos usuários.
    '''
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateUserSerializer
        return self.serializer_class


class CreateUserSerializer(serializers.ModelSerializer):
    '''
    Serializa e desserializa dados relacionados à criação de um novo usuário.
    '''
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
    '''
    Atualiza as informações de um usuário específico.
    '''
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Retorna o usuário atualmente autenticado
        return self.request.user


class UserDeleteAPIView(generics.DestroyAPIView):
    '''
    Exclui um usuário específico.
    '''
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]



class UserListAPIView(generics.ListAPIView):
    '''
    Lista todos os usuários do sistema.
    '''
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class UserDetailAPIView(generics.RetrieveAPIView):
    '''
    Lista os detalhes de um usuário específico.
    '''
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


# Utilização de JWT
class ObtainTokenPairView(TokenObtainPairView):
    '''
    Obtém um par de tokens de acesso e atualização.
    '''
    serializer_class = TokenObtainPairSerializer
    pass


class TokenObtainPairSerializer(TokenObtainPairSerializer):
    '''
    Serializa e desserializa os dados necessários para a obtenção de um par de tokens.
    '''
    username_field = 'email'


class RefreshTokenView(TokenRefreshView):
    '''
    Atualiza um token de acesso expirado.
    '''
    pass


    
@api_view(['POST'])
def rate_user(request, pk):
    '''
    Lida com o processo de votação de um usuário.
    '''
    try:
        # Recupera o usuário pelo ID
        user = CustomUser.objects.get(pk=pk)
    except CustomUser.DoesNotExist:
        return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)

    if user == request.user:
        # Retorna erro caso o usuário esteja tentando votar em si mesmo.
        return Response({'error': 'You cannot vote for yourself.'}, status=status.HTTP_400_BAD_REQUEST)

    rating = request.data.get('rating')
    if rating is None or not isinstance(rating, (int, float)) or rating < 0 or rating > 5:
        # Retorna erro caso o número seja inválido
        return Response({'error': 'Invalid rating. Rating should be a number between 0 and 5.'}, status=status.HTTP_400_BAD_REQUEST)

    # Atualiza os campos de classificação do usuário
    user.total_rating += rating
    user.num_ratings += 1
    user.average_rating = user.total_rating / user.num_ratings
    user.save()

    return Response({'success': 'Vote recorded.'}, status=status.HTTP_201_CREATED)