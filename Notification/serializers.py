from rest_framework import serializers

from All_models.models import EmployeeTypeNotification, NotificationType, Notification


class EmployeeTypeNotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeTypeNotification
        fields = '__all__'


class NotificationTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = NotificationType
        fields = '__all__'


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'title', 'content', 'created_at', 'updated_at']


class EmployeeTypeNotificationSerializer(serializers.ModelSerializer):
    notification = NotificationSerializer()

    class Meta:
        model = EmployeeTypeNotification
        fields = ['id', 'employee', 'type', 'notification', 'created_at']

    def create(self, validated_data):
        notification_data = validated_data.pop('notification')
        notification = Notification.objects.create(**notification_data)
        employee_type_notification = EmployeeTypeNotification.objects.create(notification=notification, **validated_data)
        return employee_type_notification
