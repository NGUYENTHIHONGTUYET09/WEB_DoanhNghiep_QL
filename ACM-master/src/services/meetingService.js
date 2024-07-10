import { ro } from "date-fns/locale";
import axiosInstance from "../API/axiosInstance";

export const getRooms = () => {
  return axiosInstance.get('meeting/rooms/')
}

export const getBookingRooms = (date, room) => {
  return axiosInstance.post('meeting/booking-rooms/', { date, room })
}

export const createBookingRoom = (data) => {
  return axiosInstance.post('meeting/booking-rooms/create/', data)
}

export const deleteBookingRoom = (id) => {
  return axiosInstance.delete(`meeting/booking-rooms/delete/${id}`)
}