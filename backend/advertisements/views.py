from rest_framework import generics, serializers
from rest_framework.permissions import IsAuthenticated
from .models import Advertisement
from .serializers import AdvertisementSerializer


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
