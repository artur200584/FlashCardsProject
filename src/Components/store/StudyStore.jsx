import { create } from "zustand";

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
