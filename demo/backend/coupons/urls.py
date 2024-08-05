from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PublicCouponViewSet, UserCouponViewSet

router = DefaultRouter()
router.register(r'public-coupons', PublicCouponViewSet, basename='public-coupon')
router.register(r'user-coupons', UserCouponViewSet, basename='user-coupon')

urlpatterns = [
    path('', include(router.urls)),
]
