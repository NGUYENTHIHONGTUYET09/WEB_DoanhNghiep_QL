import uuid
from django.db import models


class Employee(models.Model):
    class Meta:
        db_table = 'Employee'

    id = models.CharField(primary_key=True, default=uuid.uuid4, max_length=36)
    image = models.ImageField(upload_to='employee_images/', null=True)
    name = models.CharField(max_length=255)
    citizen_id = models.CharField(max_length=100)
    birthdate = models.DateTimeField()
    phone = models.CharField(max_length=20)
    appointment_date = models.DateTimeField()


class User(models.Model):
    class Meta:
        db_table = 'Users'

    id = models.CharField(primary_key=True, default=uuid.uuid4, max_length=36)
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    role = models.ForeignKey('Role', on_delete=models.CASCADE, db_column='role_id')
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)


class Room(models.Model):
    class Meta:
        db_table = 'Room'

    id = models.CharField(primary_key=True, default=uuid.uuid4, max_length=36)
    name = models.CharField(max_length=255)


class TimeSlot(models.Model):
    class Meta:
        db_table = 'TimeSlot'
    id = models.CharField(primary_key=True, default=uuid.uuid4, max_length=36)
    name = models.CharField(max_length=100)


class BookingRoom(models.Model):
    class Meta:
        db_table = 'BookingRoom'

    id = models.CharField(primary_key=True, default=uuid.uuid4, max_length=36)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    timeslot = models.ForeignKey(TimeSlot, on_delete=models.CASCADE)
    date = models.CharField(max_length=100)


class NotificationType(models.Model):
    class Meta:
        db_table = 'NotificationType'

    id = models.CharField(primary_key=True, default=uuid.uuid4, max_length=36)
    name = models.CharField(max_length=100, default=None, null=True)


class Notification(models.Model):
    class Meta:
        db_table = 'Notification'

    id = models.CharField(primary_key=True, default=uuid.uuid4, max_length=36)
    title = models.CharField(max_length=255, null=True)
    content = models.TextField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()


class EmployeeTypeNotification(models.Model):
    class Meta:
        db_table = 'EmployeeTypeNotification'

    id = models.CharField(primary_key=True, default=uuid.uuid4, max_length=36)
    employee = models.ForeignKey('Employee', on_delete=models.CASCADE, db_column='employee_id')
    type = models.ForeignKey('NotificationType', on_delete=models.CASCADE, db_column='type_id')
    notification = models.ForeignKey('Notification', on_delete=models.CASCADE, db_column='notification_id')
    created_at = models.DateTimeField(auto_now=True)


class EmployeeNotification(models.Model):
    class Meta:
        db_table = 'EmployeeNotification'
        unique_together = ('employee', 'notification')

    id = models.CharField(primary_key=True, default=uuid.uuid4, max_length=36)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    notification = models.ForeignKey(Notification, on_delete=models.CASCADE)
    create_at = models.DateTimeField(null=True)


class Position(models.Model):
    class Meta:
        db_table = 'Position'

    id = models.CharField(primary_key=True, default=uuid.uuid4, max_length=36)
    position = models.CharField(max_length=255)


class Role(models.Model):
    class Meta:
        db_table = 'Role'

    id = models.CharField(primary_key=True, default=uuid.uuid4, max_length=36)
    role = models.CharField(max_length=255)


class EmployeeRolePosition(models.Model):
    class Meta:
        db_table = 'EmployeeRolePosition'
        unique_together = ('position', 'role', 'employee')

    id = models.CharField(primary_key=True, default=uuid.uuid4, max_length=36)
    position = models.ForeignKey(Position, on_delete=models.CASCADE)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    assigned_at = models.DateTimeField()


class FormType(models.Model):
    class Meta:
        db_table = 'FormType'

    id = models.CharField(primary_key=True, default=uuid.uuid4, max_length=36)
    name = models.CharField(max_length=100)


class Form(models.Model):
    class Meta:
        db_table = 'Form'

    id = models.CharField(primary_key=True, default=uuid.uuid4, max_length=36)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    type = models.ForeignKey(FormType, on_delete=models.CASCADE)
    title = models.CharField(max_length=1000)
    content = models.TextField(max_length=100000000)
    status = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
