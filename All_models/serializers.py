from rest_framework import serializers
from All_models.models import Employee, EmployeeRolePosition


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = "__all__"
