from django.urls import path
from .views import (
    AdvertisementListAPIView,
    AdvertisementDetailAPIView,
    AdvertisementCreateAPIView,
    AdvertisementSearchAPIView,
    AdvertisementUpdateAPIView,
    AdvertisementDeleteAPIView
)

app_name = 'advertisements'

urlpatterns = [
    path('advertisements/', AdvertisementListAPIView.as_view(),
         name='advertisement-list'),
    path('advertisements/<int:pk>/', AdvertisementDetailAPIView.as_view(),
         name='advertisement-detail'),
    path('advertisements/create/', AdvertisementCreateAPIView.as_view(),
         name='advertisement-create'),
    path('advertisements/search/', AdvertisementSearchAPIView.as_view(),
         name='advertisement-search'),
    path('advertisements/<int:pk>/update/',
         AdvertisementUpdateAPIView.as_view(), name='advertisement-update'),
    path('advertisements/<int:pk>/delete/', AdvertisementDeleteAPIView.as_view(),
         name='advertisement-delete'),
]
