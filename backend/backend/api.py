from rest_framework import viewsets, permissions, status
from .models import Task
from .serializers import taskSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = taskSerializer

    @action(detail = True, methods = ['post'])
    def done(self, request, pk=None):
        task = self.get_object()
        task.done = not task.done
        task.save()
        return Response({
            'status': 'tarea hecha' if task.done else 'task no hecha'
            }, status = status.HTTP_200_OK) 