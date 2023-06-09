# Generated by Django 4.2.1 on 2023-05-31 18:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_rename_rating_customuser_ratings'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='average_rating',
            field=models.DecimalField(decimal_places=1, default=0, max_digits=3),
        ),
        migrations.AddField(
            model_name='customuser',
            name='num_ratings',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='customuser',
            name='total_rating',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=6),
        ),
    ]
