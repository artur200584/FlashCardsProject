import { create } from "zustand";

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
