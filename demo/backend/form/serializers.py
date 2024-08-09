from rest_framework import serializers
from .models import FormField
from .models import FormSubmission

class FormSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormSubmission
        fields = '__all__'

class FormFieldSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormField
        fields =  '__all__'
