from django.urls import path
from .views import (
    UserInfoView,
    UserListAPIView,
    UserDetailAPIView,
    UserListCreateAPIView,
    UserRetrieveUpdateAPIView,
    ObtainTokenPairView, 
    RefreshTokenView,
    UserDeleteAPIView
)

app_name = 'users'

urlpatterns = [
    path('user-info/', UserInfoView.as_view(), name='user-info'),
    path('users/', UserListAPIView.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetailAPIView.as_view(), name='user-detail'),
    path('users/create/', UserListCreateAPIView.as_view(), name='user-list-create'),
    path('users/<int:pk>/update/', UserRetrieveUpdateAPIView.as_view(), name='user-retrieve-update'),
    path('users/<int:pk>/delete/', UserDeleteAPIView.as_view(), name='user-delete'),
    path('token/', ObtainTokenPairView.as_view(), name='token-obtain-pair'),
    path('token/refresh/', RefreshTokenView.as_view(), name='token-refresh')
]