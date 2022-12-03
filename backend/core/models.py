from pydoc import describe
from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title

class File(models.Model):
    file = models.FileField(blank=True, null=True, upload_to='media/')
    name = models.TextField(blank=True, null=True)
