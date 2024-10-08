# Generated by Django 4.2.14 on 2024-08-13 16:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("product", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="product",
            name="images",
        ),
        migrations.AddField(
            model_name="productimage",
            name="product",
            field=models.ForeignKey(
                default=None,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="images",
                to="product.product",
            ),
            preserve_default=False,
        ),
    ]
