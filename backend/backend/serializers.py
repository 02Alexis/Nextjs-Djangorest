from rest_framework import serializers
from .models import Task

class taskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Taskfields = ('id', 'title', 'description', 'done', 'created_at')
        read_only_fields = ('id', 'created_at')
