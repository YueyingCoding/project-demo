from django.db import models
from django.contrib.auth.models import User

class PublicCoupon(models.Model):
    description = models.CharField(max_length=255)
    # discount = models.DecimalField(max_digits=5, decimal_places=2)
    # minimum_purchase = models.DecimalField(max_digits=10, decimal_places=2)
    low_discount = models.IntegerField()
    low_minimum_purchase = models.IntegerField()
    medium_discount = models.IntegerField()
    medium_minimum_purchase = models.IntegerField()
    high_discount = models.IntegerField()
    high_minimum_purchase = models.IntegerField()
    code = models.CharField(max_length=50, unique=True)
    capped_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return f'{self.description} - {self.code}'

class UserCoupon(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    coupon = models.ForeignKey(PublicCoupon, on_delete=models.CASCADE)
    used = models.BooleanField(default=False)
    redeemed_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f'{self.user.username} - {self.coupon.code}'
