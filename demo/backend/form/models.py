from django.db import models

class FormField(models.Model):
    FIELD_TYPES = [
        ('text', 'Text'),
        ('email', 'Email'),
        ('number', 'Number'),
        ('password', 'Password'),
    ]

    name = models.CharField(max_length=100)
    field_type = models.CharField(max_length=20, choices=FIELD_TYPES)
    label = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class FormSubmission(models.Model):
    submission_id = models.CharField(max_length=255)  # Unique identifier for each form submission
    form_field = models.ForeignKey(FormField, on_delete=models.CASCADE)
    value = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.submission_id} - {self.form_field.name}: {self.value}"
