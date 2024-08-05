from django.contrib import admin
from .models import PublicCoupon, UserCoupon

admin.site.register(PublicCoupon)
admin.site.register(UserCoupon)
