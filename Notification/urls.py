from django.urls import path
from .views import (GetNotificationViews, GetNotificationType,
                    CreateNotification, DeleteNotifications,
                    UpdateNotification)


urlpatterns = [
    path('notifications/', GetNotificationViews.as_view(), name='get_notification'),
    path('notifications/types/', GetNotificationType.as_view(), name='get_notification_type'),
    path('notifications/create/', CreateNotification.as_view(), name='create_notification'),
    path('notifications/update/<str:id>/', UpdateNotification.as_view(), name='update_notification'),
    path('notifications/delete/<str:id>/', DeleteNotifications.as_view(), name='delete_notification'),
]