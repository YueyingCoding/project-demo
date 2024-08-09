from django.urls import path
from .views import FormFieldsView, FormSubmissionView

urlpatterns = [
    path('api/form-fields/', FormFieldsView.as_view(), name='form-fields'),
    path('api/form-submit/', FormSubmissionView.as_view(), name='form-submit'),
]
