from django.contrib import admin
from blog.models import Post

# Register your models here.
class PostAdming(admin.ModelAdmin):
    list_display = ('id', 'title', 'modify_dt')
    list_filter = ('modify_dt')
    search_fields = ('tiotle', 'content')
    prepopulated_fields = {'slug':('title'),}