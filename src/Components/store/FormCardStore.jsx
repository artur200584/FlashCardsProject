import { create } from "zustand";

export const useFormcCard = create((set) => ({
  inputQuestion: "",
  inputAnswer: "",

  setInputQuestion: (val) => set({ inputQuestion: val }),
  setInputAnswer: (val) => set({ inputAnswer: val }),
}));
