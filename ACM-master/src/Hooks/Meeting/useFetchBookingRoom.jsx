import { useState, useEffect, useMemo } from "react";
import { getBookingRooms } from "../../services/meetingService";

export const useFetchBookingRooms = (date, room) => {
  const [bookingRooms, setBookingRooms] = useState([]);
  const [bookingRoomsLoading, setLoading] = useState(true);
  const [bookingRoomsError, setError] = useState(null);

  useEffect(() => {
    const fetchBookingRooms = async () => {
      if (date && room) {
        try {
          setLoading(true);
          const response = await getBookingRooms(date, room);
          const sortData = response.data.sort((a, b) => {
            const timeA = a.time.split(' - ')[0];
            const timeB = b.time.split(' - ')[0];
            return new Date(timeA) - new Date(timeB);
          });
          setBookingRooms(sortData);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      } else {
        setBookingRooms([]);
        setLoading(false);
        setError(null);
      }
    };
    fetchBookingRooms();
  }, [date, room]);

  // Memoize the return value to prevent unnecessary re-renders
  const memoizedResult = useMemo(() => ({
    bookingRooms,
    bookingRoomsLoading,
    bookingRoomsError
  }), [bookingRooms, bookingRoomsLoading, bookingRoomsError]);

  return {
    bookingRooms: memoizedResult.bookingRooms,
    bookingRoomsLoading: memoizedResult.bookingRoomsLoading,
    bookingRoomsError: memoizedResult.bookingRoomsError
  };
};
