import useFetch from "../useFetch";
import { getRooms } from "../../services/meetingService"
export const useFetchRooms = () => {
  const { data: rooms, loading, error } = useFetch(getRooms)
  return { rooms, loading, error };
}