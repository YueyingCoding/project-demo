from rest_framework import serializers
from .models import Product, ProductImage, Review, Category

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['url']

class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()  # To display the user as a string (e.g., username)

    class Meta:
        model = Review
        fields = ['title', 'content', 'rating', 'created_at', 'user']

class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)
    reviews = ReviewSerializer(many=True, read_only=True)
    categories = serializers.StringRelatedField(many=True)  # To display categories as a list of names

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'categories', 'sold', 'images', 'reviews']
