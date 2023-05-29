from rest_framework import serializers
from .models import Advertisement, Rating
from django.db.models import Avg


class AdvertisementSerializer(serializers.ModelSerializer):
    average_rating = serializers.SerializerMethodField()

    class Meta:
        model = Advertisement
        fields = ['id', 'description', 'category',
                  'price', 'created_at', 'average_rating']

    def get_average_rating(self, obj):
        average_rating = Rating.objects.filter(
            advertisement=obj).aggregate(Avg('rating'))
        return average_rating['rating__avg']


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ['user', 'advertisement', 'rating']
        read_only_fields = ['user', 'advertisement']

    def validate_rating(self, value):
        if value < 0 or value > 5:
            raise serializers.ValidationError(
                "Rating must be between 0 and 5.")
        return value
