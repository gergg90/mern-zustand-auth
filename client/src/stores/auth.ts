import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  token: string;
}

interface Actions {
  setToken: (token: string) => void;
}

const storeAPIAuth: StateCreator<State & Actions> = (set) => ({
  token: "",
  setToken: (token: string) => set((state) => ({ token })),
});

export const useAuthStore = create<State & Actions>()(
  devtools(
    persist(storeAPIAuth, {
      name: "auth-storage",
    })
  )
);
