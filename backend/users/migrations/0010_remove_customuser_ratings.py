# Generated by Django 4.2.1 on 2023-05-31 18:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_customuser_average_rating_customuser_num_ratings_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='ratings',
        ),
    ]