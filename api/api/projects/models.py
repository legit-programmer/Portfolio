from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=50)
    link = models.CharField(max_length=500)
    desc = models.TextField()

