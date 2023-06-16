from django.shortcuts import render
from rest_framework.views import APIView
from.models import Project
from rest_framework.response import Response

class ProjectView(APIView):
    
    def get(self, request):
        projects = Project.objects.all()
        data = []
        for project in projects:
            data.append({'title':project.title, 'link':project.link, 'description':project.desc})

        return Response(data)


