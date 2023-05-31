from rest_framework import serializers
from .models import Advertisement
from django.db.models import Avg


class AdvertisementSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='get_user_name', read_only=True)

    class Meta:
        model = Advertisement
        fields = ['id', 'description', 'category',
                  'price', 'availability', 'created_at',
                  'user_name']

