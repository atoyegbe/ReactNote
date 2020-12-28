from django.urls import path 
from .views import *
urlpatterns = [
   path("notes/", NoteList.as_view()),
   path("notes/<int:pk>", NoteDetail.as_view(), name="notes"),
]