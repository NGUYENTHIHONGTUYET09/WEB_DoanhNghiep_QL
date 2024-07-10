from django.contrib import admin
from .models import Employee, EmployeeNotification, EmployeeTypeNotification, EmployeeRolePosition, User, Room, \
    TimeSlot, BookingRoom, Notification, NotificationType, Position, Role, FormType, Form

admin.site.register(Employee)
admin.site.register(EmployeeNotification)
admin.site.register(EmployeeTypeNotification)
admin.site.register(EmployeeRolePosition)
admin.site.register(User)
admin.site.register(Room)
admin.site.register(TimeSlot)
admin.site.register(BookingRoom)
admin.site.register(Notification)
admin.site.register(NotificationType)
admin.site.register(Position)
admin.site.register(Role)
admin.site.register(FormType)
admin.site.register(Form)
