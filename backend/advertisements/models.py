from django.db import models
from users.models import CustomUser


class Advertisement(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    description = models.TextField()
    category = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    availability = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def get_user_name(self):
        return self.user.name()

    def get_user_idiomas(self):
        return self.user.idiomas.all()

    