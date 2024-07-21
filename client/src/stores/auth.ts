import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  token: string;
  profile: any;
  isAuth: boolean;
}

interface Actions {
  setToken: (token: string) => void;
  setProfile: (profile: any) => void;
  logOut: () => void;
}

const storeAPIAuth: StateCreator<
  State & Actions,
  [["zustand/devtools", never]]
> = (set) => ({
  token: "",
  profile: "",
  isAuth: false,
  setToken: (token: string) => set({ token: token, isAuth: true }),
  setProfile: (profile: any) =>
    set((state) => ({
      profile: profile,
    })),
  logOut: () => set({ token: "", isAuth: false }),
});

export const useAuthStore = create<State & Actions>()(
  devtools(
    persist(storeAPIAuth, {
      name: "auth-storage",
    })
  )
);
