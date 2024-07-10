import { getNotificationsTypes } from "../../API/Notification";
import useFetch from "../useFetch";

const useFetchNotificationTypes = () => {
  const { data: notificationTypes, loading, error } = useFetch(getNotificationsTypes)
  return { notificationTypes, loading, error };
};

export default useFetchNotificationTypes;
