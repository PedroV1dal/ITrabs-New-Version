# Generated by Django 4.2.1 on 2023-05-31 01:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_customuser_instagram_link_customuser_linkedin_link_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='availability',
        ),
    ]
