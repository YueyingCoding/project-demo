# coupons/views.py

from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from .models import PublicCoupon, UserCoupon
from .serializers import PublicCouponSerializer, UserCouponSerializer

class PublicCouponViewSet(ModelViewSet):
    queryset = PublicCoupon.objects.all()
    serializer_class = PublicCouponSerializer
    permission_classes = [AllowAny]  # Public coupons don't require authentication


class UserCouponViewSet(viewsets.ModelViewSet):
    queryset = UserCoupon.objects.all()
    serializer_class = UserCouponSerializer