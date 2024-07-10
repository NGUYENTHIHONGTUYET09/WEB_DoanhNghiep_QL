import { getNotifications } from "../../API/Notification";
import useFetch from "../useFetch";

const useFetchNotification = () => {
  const { data: notifications, loading, error } = useFetch(getNotifications)
  return {notifications, loading, error};
};

export default useFetchNotification;
