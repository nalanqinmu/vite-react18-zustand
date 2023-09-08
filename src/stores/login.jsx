import { create } from "zustand";
import { persist } from "zustand/middleware"

const useLoginStore = create(
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (info) => set({ userInfo: info })
    }),
    {
      name: "userInfo"
    }
  )
)

export default useLoginStore