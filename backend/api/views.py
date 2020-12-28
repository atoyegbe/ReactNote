from django.shortcuts import render
from rest_framework import generics
from django_filters import rest_framework as filters



from .models import Note
from .serializers import NoteSerializer
class NoteFilters(filters.FilterSet):
    class Meta:
        model = Note
        fields = {
            'title': ['contains', 'exact']
        }

class NoteList(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    filterset_class = NoteFilters
    search_fileds = ['title']



class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


