from django.shortcuts import get_object_or_404
from rest_framework import serializers
from All_models.models import FormType, Form, Employee


class FormTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormType
        fields = '__all__'


class CustomFormSerializer(serializers.ModelSerializer):
    employee_name = serializers.SerializerMethodField()

    class Meta:
        model = Form
        fields = '__all__'
        extra_fields = ['employee_name']

    def get_employee_name(self, obj):
        try:
            employee = obj.employee
            return employee.name
        except Employee.DoesNotExist:
            return None


class CreateFormSerializer(serializers.Serializer):
    employee = serializers.CharField()
    type = serializers.CharField()
    title = serializers.CharField()
    content = serializers.CharField()
    status = serializers.CharField()

    def create(self, validated_data):
        employee_id = validated_data.pop('employee')
        employee = Employee.objects.get(id=employee_id)
        type = validated_data.pop('type')
        type_id = get_object_or_404(FormType, name=type)
        instance = Form.objects.create(employee=employee, type=type_id, **validated_data)
        instance.save()
        return instance


class FormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Form
        fields = '__all__'

    def partial_update(self, instance, validated_data):
        instance.status = validated_data.get('status', instance.status)
        instance.save()
        return instance
