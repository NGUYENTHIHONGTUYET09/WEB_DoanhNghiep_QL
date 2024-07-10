from django.urls import path
from .views import GetRoomView, GetBookingRoom, CreateBookingRoom, DeleteBookingRoom

urlpatterns = [
    path('meeting/rooms/', GetRoomView.as_view(), name='get_rooms'),
    path('meeting/booking-rooms/', GetBookingRoom.as_view(), name='get_booking_rooms'),
    path('meeting/booking-rooms/create/', CreateBookingRoom.as_view(), name='create_booking_room'),
    path('meeting/booking-rooms/delete/<str:id>/', DeleteBookingRoom.as_view(), name='delete_booking_room')
]
