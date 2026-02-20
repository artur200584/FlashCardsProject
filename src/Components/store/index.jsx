import { create } from "zustand";

export const useDeskStore = create((set) => ({
  isOpen: false,
  desk: JSON.parse(localStorage.getItem("desk")) || [],

  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),

  addDesk: (name, emoji) => {
    const newDesk = { id: crypto.randomUUID(), name, emoji };
    set((state) => {
      const updatedDesks = [...state.desk, newDesk];
      localStorage.setItem("desk", JSON.stringify(updatedDesks));

      return {
        desk: updatedDesks,
        isOpen: false,
      };
    });
  },

  deleteDesk: (id) =>
    set((state) => {
      const updatedDesks = state.desk.filter((desk) => desk.id !== id);
      localStorage.setItem("desk", JSON.stringify(updatedDesks));
      return { desk: updatedDesks };
    }),
}));

export const useFormStore = create((set) => ({
  inputValue: "",
  error: "",
  emoji: "",

  setInputValue: (value) => set({ inputValue: value }),
  setError: (message) => set({ error: message }),
  setEmoji: (emoji) => set({ emoji }),

  resetForm: () =>
    set({
      inputValue: "",
      error: "",
      emoji: "",
    }),
}));

export const useOpenStudyDesk = create((set) => ({
  isOpenModal: false,
  activeDeskId: null,

  openStudyDesk: (id) => set({ isOpenModal: true, activeDeskId: id }),
  closeStudyDesk: () => set({ isOpenModal: false, activeDeskId: null }),
}));

export const useOpenCard = create((set) => ({
  isOpenCard: false,

  openCard: () => set({ isOpenCard: true }),
  clouseCard: () => set({ isOpenCard: false }),
}));

export const useFormcCard = create((set) => ({
  inputQuestion: "",
  inputAnswer: "",

  setInputQuestion: (val) => set({ inputQuestion: val }),
  setInputAnswer: (val) => set({ inputAnswer: val }),
}));
