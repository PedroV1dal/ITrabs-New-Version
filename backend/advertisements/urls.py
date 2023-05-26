from django.urls import path
from .views import (
    AdvertisementListAPIView,
    AdvertisementDetailAPIView,
    AdvertisementCreateAPIView,
)

app_name = 'advertisements'

urlpatterns = [
    path('advertisements/', AdvertisementListAPIView.as_view(), name='advertisement-list'),
    path('advertisements/<int:pk>/', AdvertisementDetailAPIView.as_view(), name='advertisement-detail'),
    path('advertisements/create/', AdvertisementCreateAPIView.as_view(), name='advertisement-create'),
]