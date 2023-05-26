from django.urls import path
from .views import (
    UserListAPIView,
    UserDetailAPIView,
    UserListCreateAPIView,
    UserRetrieveUpdateAPIView,
    ObtainTokenPairView, 
    RefreshTokenView
)

app_name = 'users'

urlpatterns = [
    path('users/', UserListAPIView.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetailAPIView.as_view(), name='user-detail'),
    path('users/create/', UserListCreateAPIView.as_view(), name='user-list-create'),
    path('users/<int:pk>/update/', UserRetrieveUpdateAPIView.as_view(), name='user-retrieve-update'),
    path('token/', ObtainTokenPairView.as_view(), name='token-obtain-pair'),
    path('token/refresh/', RefreshTokenView.as_view(), name='token-refresh')
]