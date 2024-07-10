from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from All_models.models import User, Employee, EmployeeRolePosition
from All_models.serializers import EmployeeSerializer
from rest_framework import generics, status
from rest_framework.response import Response

from rest_framework import serializers
from django.shortcuts import get_object_or_404
from rest_framework import status


class RegisterSerializer(serializers.ModelSerializer):
    employee_id = serializers.CharField()  # Sửa CharFields thành CharField

    class Meta:
        model = User
        fields = ['username', 'password', 'employee_id']

    def create(self, validated_data):
        id = validated_data.get('employee_id')
        username = validated_data.get('username')
        password = validated_data.pop('password')
        role = get_object_or_404(EmployeeRolePosition, employee_id=id)

        # Kiểm tra xem username đã tồn tại chưa
        username = validated_data.get('username')
        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError("Username đã tồn tại")

        role_id = role.role_id
        user = User.objects.create(role_id=role_id, password=make_password(password), **validated_data)
        return user


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']
