# Generated by Django 4.2.14 on 2024-08-09 04:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("form", "0003_remove_formsubmission_submission_id"),
    ]

    operations = [
        migrations.AddField(
            model_name="formsubmission",
            name="submission_id",
            field=models.CharField(default=None, max_length=255),
            preserve_default=False,
        ),
    ]
