from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    college = models.CharField(max_length=100)
    branch = models.CharField(max_length=100)
    cgpa = models.FloatField()
    skills = models.TextField()

    def __str__(self):
        return self.user.username