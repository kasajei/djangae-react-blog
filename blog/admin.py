from django.contrib import admin

# Register your models here.
from blog.models import *

class PostAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "published", "is_published")

admin.site.register(Post, PostAdmin)