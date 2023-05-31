from rest_framework import generics, serializers, permissions
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated
from .models import Advertisement, Rating
from .serializers import AdvertisementSerializer, RatingSerializer
from django.db.models import Q


class AdvertisementCreateAPIView(generics.CreateAPIView):
    queryset = Advertisement.objects.all()
    serializer_class = AdvertisementSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        # Verificar o número de anúncios existentes do usuário
        # e se ele excede o limite permitido
        if user.advertisement_set.count() >= 3:
            raise serializers.ValidationError(
                "Exceeded the maximum number of advertisements.")
        serializer.save(user=user)


class AdvertisementListAPIView(generics.ListAPIView):
    queryset = Advertisement.objects.all()
    serializer_class = AdvertisementSerializer


class AdvertisementDetailAPIView(generics.RetrieveAPIView):
    queryset = Advertisement.objects.all()
    serializer_class = AdvertisementSerializer


class AdvertisementSearchAPIView(generics.ListAPIView):
    serializer_class = AdvertisementSerializer

    def get_queryset(self):
        search_query = self.request.query_params.get('query', '')
        if search_query:
            queryset = Advertisement.objects.filter(
                Q(description__icontains=search_query) |
                Q(category__icontains=search_query) |
                Q(price__icontains=search_query) |
                Q(created_at__icontains=search_query)
            )
        else:
            queryset = Advertisement.objects.all()
        return queryset


class AdvertisementUpdateAPIView(generics.UpdateAPIView):
    queryset = Advertisement.objects.all()
    serializer_class = AdvertisementSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        # Obtém o anúncio pelo ID e verifica se o usuário atual é o criador do anúncio
        obj = super().get_object()
        if obj.user != self.request.user:
            # Levanta uma exceção se o usuário não for o criador do anúncio
            raise PermissionDenied(
                "You do not have permission to edit this advertisement.")
        return obj


class AdvertisementDeleteAPIView(generics.DestroyAPIView):
    queryset = Advertisement.objects.all()
    serializer_class = AdvertisementSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        # Obtém o anúncio pelo ID e verifica se o usuário atual é o criador do anúncio
        obj = super().get_object()
        if obj.user != self.request.user:
            # Levanta uma exceção se o usuário não for o criador do anúncio
            raise PermissionDenied(
                "You do not have permission to delete this advertisement.")
        return obj


class AdvertisementRatingCreateAPIView(generics.CreateAPIView):
    serializer_class = RatingSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        advertisement_id = self.kwargs['pk']
        advertisement = Advertisement.objects.get(pk=advertisement_id)

        if Rating.objects.filter(user=user, advertisement=advertisement).exists():
            raise serializers.ValidationError(
                "You have already voted for this advertisement.")

        serializer.save(user=user, advertisement=advertisement)
