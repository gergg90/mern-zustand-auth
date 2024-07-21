import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface User {
  email: string;
  password: string;
}

interface State {
  token: string;
  profile: User;
  isAuth: boolean;
}

interface Actions {
  setToken: (token: string) => void;
  setProfile: (profile: User) => void;
  logOut: () => void;
}

const storeAPIAuth: StateCreator<
  State & Actions,
  [["zustand/devtools", never]]
> = (set) => ({
  token: "",
  profile: {
    email: "",
    password: "",
  },
  isAuth: false,
  setToken: (token: string) => set({ token: token, isAuth: true }),
  setProfile: (profile: User) =>
    set({
      profile: profile,
    }),
  logOut: () =>
    set({
      token: "",
      isAuth: false,
      profile: {
        email: "",
        password: "",
      },
    }),
});

export const useAuthStore = create<State & Actions>()(
  devtools(
    persist(storeAPIAuth, {
      name: "auth-storage",
    })
  )
);
