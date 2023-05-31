from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    rating = serializers.DecimalField(max_digits=3, decimal_places=1, read_only=True)

    class Meta:
        model = CustomUser
        fields = '__all__'