from django.db import models

# Create your models here.
class Note(models.Model):
    title = models.CharField(max_length=100)
    note = models.TextField()
    date_created = models.TimeField(auto_now_add=True)


    def __str__(self):
        return self.title