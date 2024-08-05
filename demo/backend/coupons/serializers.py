# coupons/serializers.py

from rest_framework import serializers
from .models import PublicCoupon, UserCoupon

class PublicCouponSerializer(serializers.ModelSerializer):
    class Meta:
        model = PublicCoupon
        fields = ['description', 'low_discount', 'low_minimum_purchase', 'medium_discount', 'medium_minimum_purchase', 'high_discount', 'high_minimum_purchase', 'code', 'capped_amount']

class UserCouponSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCoupon
        fields = ['user', 'coupon', 'used', 'redeemed_at']
