import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  token: string;
  profile: any;
}

interface Actions {
  setToken: (token: string) => void;
  setProfile: (profile: any) => void;
}

const storeAPIAuth: StateCreator<
  State & Actions,
  [["zustand/devtools", never]]
> = (set) => ({
  token: "",
  profile: "",
  setToken: (token: string) => set({ token }),
  setProfile: (profile: any) =>
    set((state) => ({
      profile: profile,
    })),
});

export const useAuthStore = create<State & Actions>()(
  devtools(
    persist(storeAPIAuth, {
      name: "auth-storage",
    })
  )
);
