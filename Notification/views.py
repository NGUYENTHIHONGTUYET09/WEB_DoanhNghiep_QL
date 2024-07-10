from django.shortcuts import get_object_or_404
from django.utils import timezone
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from All_models.models import EmployeeTypeNotification, Notification, Employee, NotificationType
from .serializers import EmployeeTypeNotificationSerializer, NotificationTypeSerializer


class GetNotificationViews(APIView):
    def get(self, request):
        response_data = []
        list_items = EmployeeTypeNotification.objects.all()
        for item in list_items:
            temp = {
                "id": item.id,
                "time": item.notification.created_at,
                "sender": item.employee.name,
                "title": item.notification.title,
                "content": item.notification.content,
                "type": item.type.name
            }
            response_data.append(temp)
        return Response(response_data, status=status.HTTP_200_OK)


class GetNotificationType(generics.ListAPIView):
    queryset = NotificationType.objects.all()
    serializer_class = NotificationTypeSerializer


class CreateNotification(APIView):
    def post(self, request, format=None):
        data = request.data
        employee_id = data.get('employee_id')
        type_name = data.get('type')
        notification_data = data.get('notification')

        employee = get_object_or_404(Employee, id=employee_id)

        notification_type, created = NotificationType.objects.get_or_create(name=type_name)

        notification_data['created_at'] = timezone.now()
        notification_data['updated_at'] = timezone.now()

        employee_type_notification_data = {
            'employee': employee.id,
            'type': notification_type.id,
            'notification': notification_data,
            'created_at': timezone.now()
        }

        serializer = EmployeeTypeNotificationSerializer(data=employee_type_notification_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateNotification(APIView):
    def put(self, request, id, format=None):
        data = request.data
        employee_id = data.get('employee_id')
        type_name = data.get('type')
        notification_data = data.get('notification')

        employee = get_object_or_404(Employee, id=employee_id)

        employee_notification = get_object_or_404(EmployeeTypeNotification, id=id)

        notification_type, created = NotificationType.objects.get_or_create(name=type_name)

        notification_instance = employee_notification.notification
        for key, value in notification_data.items():
            setattr(notification_instance, key, value)
        notification_instance.save()

        employee_notification.employee = employee
        employee_notification.type = notification_type
        employee_notification.save()

        serializer = EmployeeTypeNotificationSerializer(employee_notification)
        return Response(serializer.data, status=status.HTTP_200_OK)


class DeleteNotifications(APIView):
    def delete(self, request, id):
        employee_type_notification_instance = get_object_or_404(EmployeeTypeNotification, id=id)
        notification_instance = employee_type_notification_instance.notification
        notification_instance.delete()
        employee_type_notification_instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
