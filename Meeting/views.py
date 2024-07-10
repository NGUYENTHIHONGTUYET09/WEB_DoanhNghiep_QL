from django.shortcuts import get_object_or_404, get_list_or_404
from django.utils import timezone
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from All_models.models import Room, BookingRoom, TimeSlot, Employee, Form
from .serializer import RoomSerializer, CustomBookingRoomSerializer, CreateBookingRoomSerializer


class GetRoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class GetBookingRoom(APIView):
    def post(self, request):
        serializer = CustomBookingRoomSerializer(data=request.data)
        if serializer.is_valid():
            date = serializer.validated_data.get('date')
            room = serializer.validated_data.get('room')
            if not room or not date:
                return Response([], status=status.HTTP_200_OK)
            response_data = []
            time_slots = TimeSlot.objects.all()
            for ts in time_slots:
                temp = {"time": ts.name}
                rooms = Room.objects.get(name=room)
                booking_rooms = BookingRoom.objects.filter(timeslot_id=ts.id, date=date, room_id=rooms.id)
                if booking_rooms.exists():
                    booking_room = booking_rooms.first()
                    temp['id'] = booking_room.id
                    temp['employee_id'] = booking_room.employee.id
                    temp['name'] = booking_room.employee.name
                    temp['phone'] = booking_room.employee.phone
                    temp['status'] = "Booked"
                else:
                    temp['id'] = ""
                    temp['employee_id'] = ""
                    temp['name'] = ""
                    temp['phone'] = ""
                    temp['status'] = "Free"
                response_data.append(temp)
            return Response(response_data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreateBookingRoom(APIView):
    def post(self, request):
        serializer = CreateBookingRoomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("OK", status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeleteBookingRoom(APIView):
    def delete(self, request, id):
        instance = get_object_or_404(BookingRoom, id=id)
        instance.delete()
        return Response("Deleted !!", status=status.HTTP_200_OK)



