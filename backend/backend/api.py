from rest_framework import viewsets, permissions
from .models import Task
from .serializers import taskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = taskSerializer
