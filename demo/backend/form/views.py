import uuid
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import FormField, FormSubmission
from .serializers import FormFieldSerializer, FormSubmissionSerializer
from rest_framework.permissions import AllowAny
from rest_framework import status

class FormFieldsView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        fields = FormField.objects.all()
        serializer = FormFieldSerializer(fields, many=True)
        return Response(serializer.data)

class FormSubmissionView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data
        submission_id = str(uuid.uuid4())  # Generate a unique ID for this submission

        # Ensure data is a dictionary
        if not isinstance(data, dict):
            return Response({"error": "Invalid data format"}, status=status.HTTP_400_BAD_REQUEST)

        for field_name, value in data.items():
            try:
                form_field = FormField.objects.get(name=field_name)
                submission = FormSubmission(submission_id=submission_id, form_field=form_field, value=value)
                submission.save()
            except FormField.DoesNotExist:
                return Response({"error": f"FormField with name '{field_name}' does not exist"}, status=status.HTTP_400_BAD_REQUEST)

        return Response({"message": "Form submitted successfully"}, status=status.HTTP_201_CREATED)