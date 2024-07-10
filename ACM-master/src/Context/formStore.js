import create from "zustand";

export const useFormStore = create((set) => ({
  formsById: "",
  setFormsById: (data) => set(() => ({formsById: data}))
}))

