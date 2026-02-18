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

export const useOpenStudyDesk = create((set) => ({
  isOpenModal: false,

  openStudyDesk: () => set({ isOpenModal: true }),
  closeStudyDesk: () => set({ isOpenModal: false }),
}));
