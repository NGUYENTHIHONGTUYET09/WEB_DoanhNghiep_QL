import create from 'zustand';


const useNotificationStore = create((set) => ({
  sortMethod: "newest_to_oldest",
  setSortMethod: (method) => set(() => ({ sortMethod: method })),
  isDisplayInteract: false,
  interactInput: {
    id: "",
    type: '',
    title: "",
    content: ""
  },
  interactType: "Create",
  displayInteract: () => set(() => ({ isDisplayInteract: true })),
  cancelInteract: () => set(() => ({ isDisplayInteract: false })),
  setInteractType: (type) => set(() => ({ interactType: type })),
  editInteract: (updatedFields) => set((state) => ({
    interactInput: {
      ...state.interactInput,
      ...updatedFields,
    }
  })),
  createInteract: () => set(() => ({
    interactInput: {
      type: '',
      title: "",
      content: ""
    }
  })),
  isDisplayContent: false,
  content: {
    date: "",
    time: "",
    sender: "",
    title: "",
    content: "",
  },
  toggleContent: (id) => set((state) => ({
    isDisplayContent: state.selectedNotificationId !== id || !state.isDisplayContent,
    selectedNotificationId: state.selectedNotificationId !== id ? id : null
  })),
  showContent: (data) => set((state) => ({
    content: {
      ...data,
    }
  })),
  selectedNotificationId: null,
  selectNotification: (id) => set(() => ({ selectedNotificationId: id })),
  clearNotification: () => set(() => ({ selectedNotificationId: null })),
  userId: "550e8400-e29b-41d4-a716-446655440006",
  setUserId: (id) => set(() => ({ userId: id }))
}));

export default useNotificationStore;
