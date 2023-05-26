# Generated by Django 4.2.1 on 2023-05-25 03:31

import django.contrib.auth.validators
from django.db import migrations, models
import django.utils.timezone
import multiselectfield.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('phone_number', models.CharField(default='(0) 0 0000-0000', max_length=16, verbose_name='Phone number')),
                ('status', models.CharField(choices=[('standard', 'Standard'), ('gold', 'Gold'), ('platinum', 'Platinum')], default='standard', max_length=10)),
                ('about_general', models.TextField(blank=True, max_length=300, verbose_name='About me')),
                ('about_looking', models.TextField(blank=True, max_length=300, verbose_name='Looking for')),
                ('about_expectation', models.TextField(blank=True, max_length=300, verbose_name='What I expect')),
                ('occupation', models.CharField(blank=True, max_length=50, verbose_name='Occupation')),
                ('professional_history', models.TextField(blank=True, max_length=300, verbose_name='Professional history')),
                ('about_professional', models.TextField(blank=True, max_length=300, verbose_name='About my career')),
                ('about_advertisement', models.TextField(blank=True, max_length=300, verbose_name='Descrição do Anúncio:')),
                ('category', models.CharField(choices=[('Não especificado', 'Não especificado'), ('Serviços Domésticos', 'Serviços Domésticos'), ('TI e Programação', 'TI e Programação'), ('Moda e Beleza', 'Moda e Beleza'), ('Reforma e Reparos', 'Reforma e Reparos'), ('Saúde', 'Saúde'), ('Assistência Técnica', 'Assistência Técnica'), ('Tradução e Conteúdo', 'Tradução e Conteúdo'), ('Design e Multimedia', 'Design e Multimedia')], default='Não especificado', max_length=30, verbose_name='Categoria')),
                ('availability', models.TextField(blank=True, max_length=70, verbose_name='Disponibilidade')),
                ('currency', models.CharField(choices=[('BRL', 'BRL'), ('USD', 'USD'), ('EUR', 'EUR'), ('GBP', 'GBP')], default='BRL', max_length=3, verbose_name='Moeda')),
                ('currency_amount', models.DecimalField(decimal_places=2, default=0, max_digits=10, verbose_name='Preço por hora')),
                ('languages', multiselectfield.db.fields.MultiSelectField(choices=[('Português', 'Português'), ('Inglês', 'Inglês'), ('Espanhol', 'Espanhol')], default='Português', max_length=30, verbose_name='Idiomas')),
                ('is_staff', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='customuser_set', related_query_name='customuser', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='customuser_set', related_query_name='customuser', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
        ),
    ]