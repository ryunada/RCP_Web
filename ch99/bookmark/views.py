from django.shortcuts import render
from django.views.generic import ListView, DetailView
from bookmark.models import Bookmark

# Create your views here.
def index(request):
    return render(request, 'index.html')

class BookmarkLV(ListView):
    model = Bookmark
    
class BookmarkDV(ListView):
    model = Bookmark