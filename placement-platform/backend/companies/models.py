from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100)
    eligibility = models.TextField()
    hiring_process = models.TextField()

    def __str__(self):
        return self.name
