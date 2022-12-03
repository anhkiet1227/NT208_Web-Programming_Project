from rest_framework import serializers
from rest_framework import viewsets
from .serialziers import ArticleSerializer,UserSerializer, FileSerialize
from .models import Article, File
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework import viewsets
from django.http import HttpResponse
from rest_framework.response import Response
from django.http import FileResponse

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated      

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    authentication_classes = (TokenAuthentication,)

class FileViewSet(viewsets.ModelViewSet):
    queryset = File.objects.all()
    serializer_class = FileSerialize

    def post(self, request, *args, **kwargs):
        file_license = request.data['file']
        file_name = request.data['name']
        File.objects.create(file=file_license, name = file_name)
        return HttpResponse({'message': 'Upload successful'}, status=201)

    def get(self, request, *args, **kwargs):
        files = File.objects.all()
        serializer = FileSerialize(files, many=True)
        return Response(serializer.data)

def DownloadViewSet(request):
    print (request)
    if request.method == 'GET':
        with open(request) as f:
            data = f.read()
        return {"data": data }
