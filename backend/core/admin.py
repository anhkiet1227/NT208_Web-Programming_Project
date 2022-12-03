from django.contrib import admin
from .models import Article, File

@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title','description')
    list_display = ('title','description')

@admin.register(File)
class FileModel(admin.ModelAdmin):
    pass


