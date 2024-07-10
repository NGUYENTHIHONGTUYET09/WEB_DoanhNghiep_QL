import create from 'zustand';

const getTodayDateISOString = () => {
  const today = new Date();
  today.setHours(17, 0, 0, 0);
  return today.toISOString();
}

export const useMeetingStore = create((set) => ({
  room: "",
  setRoom: (room) => set(() => ({ room: room })),
  date: getTodayDateISOString(),
  setDate: (date) => set(() => ({ date: date })),
  rooms: [],
  setRooms: (rooms) => set(() => ({ rooms: rooms.length > 0 ? rooms[0].name : null })),
}));
