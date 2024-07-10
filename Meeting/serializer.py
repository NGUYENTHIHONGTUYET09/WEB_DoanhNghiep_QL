from rest_framework import serializers
from All_models.models import Room, TimeSlot, BookingRoom, Employee


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'


class CustomBookingRoomSerializer(serializers.ModelSerializer):
    room = serializers.CharField()

    class Meta:
        model = BookingRoom
        fields = ['date', 'room']


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id']


class CreateBookingRoomSerializer(serializers.Serializer):
    employee = serializers.CharField()
    room = serializers.CharField()
    timeslot = serializers.CharField()
    date = serializers.CharField()

    def create(self, validated_data):
        employee_id = validated_data.get('employee')
        room_id = Room.objects.get(name=validated_data.get('room')).id
        timeslot_id = TimeSlot.objects.get(name=validated_data.get('timeslot')).id
        date = validated_data.get('date')
        new_booking_room = BookingRoom.objects.create(employee_id=employee_id, room_id=room_id,
                                                      timeslot_id=timeslot_id, date=date)
        new_booking_room.save()
        return new_booking_room
