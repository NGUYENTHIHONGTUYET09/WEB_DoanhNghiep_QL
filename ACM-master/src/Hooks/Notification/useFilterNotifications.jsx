import { format } from "date-fns";

const method = {
  "newest_to_oldest": ["time", 1],
  "oldest_to_newest": ["time", -1],
  "label_asc": ['type', -1],
  "label_desc": ['type', 1],
  "sender_asc": ['sender', -1],
  "sender_desc": ['sender', 1]
};

export const useFilterNotifications = (notifications, sortMethod, searchInput) => {
  // Kiểm tra hợp lệ cho sortMethod
  if (!method.hasOwnProperty(sortMethod)) {
    console.error('Invalid sort method');
    return notifications;
  }

  // Lấy thuộc tính và hướng sắp xếp từ method
  const [attribute, order] = method[sortMethod];

  // Hàm sắp xếp
  const compareFunction = (a, b) => {
    const comparison = b[attribute].localeCompare(a[attribute]);
    return comparison * order;
  };

  // Sắp xếp thông báo
  const sortedNotifications = [...notifications].sort(compareFunction);

  // Chuyển đổi searchInput sang lowercase
  const lowerCaseSearchInput = searchInput.toLowerCase();

  // Tìm kiếm thông báo
  const searchedNotifications = sortedNotifications.filter((notification) => {
    const formatTime = format(notification.time, 'dd/MM/yyyy HH:mm').toLowerCase();
    const sender = notification.sender.toLowerCase();
    const title = notification.title.toLowerCase();
    const type = notification.type.toLowerCase();

    return (
      formatTime.includes(lowerCaseSearchInput) ||
      sender.includes(lowerCaseSearchInput) ||
      title.includes(lowerCaseSearchInput) ||
      type.includes(lowerCaseSearchInput)
    );
  });

  return searchedNotifications;
};
