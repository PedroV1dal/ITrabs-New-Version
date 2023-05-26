from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models
from multiselectfield import MultiSelectField


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    STATUS_CHOICES = (
        ('standard', 'Standard'),
        ('gold', 'Gold'),
        ('platinum', 'Platinum')
    )
    LANGUAGE_CHOICES = (
        ('Português', 'Português'),
        ('Inglês', 'Inglês'),
        ('Espanhol', 'Espanhol'),
    )
    CATEGORY_CHOICES = (
        ('Não especificado', 'Não especificado'),
        ('Serviços Domésticos', 'Serviços Domésticos'),
        ('TI e Programação', 'TI e Programação'),
        ('Moda e Beleza', 'Moda e Beleza'),
        ('Reforma e Reparos', 'Reforma e Reparos'),
        ('Saúde', 'Saúde'),
        ('Assistência Técnica', 'Assistência Técnica'),
        ('Tradução e Conteúdo', 'Tradução e Conteúdo'),
        ('Design e Multimedia', 'Design e Multimedia'),
    )
    CURRENCY_CHOICES = (
        ('BRL', 'BRL'),
        ('USD', 'USD'),
        ('EUR', 'EUR'),
        ('GBP', 'GBP'),
    )

    name = models.CharField('Name', max_length=300, blank=True)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(
        'Phone number', max_length=16, default='(0) 0 0000-0000')
    status = models.CharField(choices=STATUS_CHOICES,
                              max_length=10, default='standard')
    about_general = models.TextField('About me', max_length=300, blank=True)
    about_looking = models.TextField('Looking for', max_length=300, blank=True)
    about_expectation = models.TextField(
        'What I expect', max_length=300, blank=True)

    occupation = models.CharField('Occupation', max_length=50, blank=True)
    professional_history = models.TextField(
        'Professional history', max_length=300, blank=True)
    about_professional = models.TextField(
        'About my career', max_length=300, blank=True)
    about_advertisement = models.TextField(
        'Descrição do Anúncio:', max_length=300, blank=True)
    category = models.CharField(
        'Categoria', choices=CATEGORY_CHOICES, max_length=30, default='Não especificado')
    availability = models.TextField(
        'Disponibilidade', max_length=70, blank=True)
    currency = models.CharField(
        'Moeda', max_length=3, choices=CURRENCY_CHOICES, default='BRL')
    currency_amount = models.DecimalField(
        'Preço por hora', max_digits=10, decimal_places=2, default=0)

    languages = MultiSelectField(
        'Idiomas', max_length=30, choices=LANGUAGE_CHOICES, default='Português')

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_set',
        blank=True,
        verbose_name='groups',
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_query_name='customuser'
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_set',
        blank=True,
        verbose_name='user permissions',
        help_text='Specific permissions for this user.',
        related_query_name='customuser'
    )

    def __str__(self):
        return self.email
