import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  token: string;
}

interface Actions {
  setToken: (token: string) => void;
}

const storeAPIAuth: StateCreator<
  State & Actions,
  [["zustand/devtools", never]]
> = (set) => ({
  token: "",
  setToken: (token: string) => set({ token }),
});

export const useAuthStore = create<State & Actions>()(
  devtools(
    persist(storeAPIAuth, {
      name: "auth-storage",
    })
  )
);
