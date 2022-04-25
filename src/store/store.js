import { configureStore } from "@reduxjs/toolkit"
import profileReduser from "./features/user/userSlice"

export const store = configureStore({
  reducer: {
    profile: profileReduser
  }
})
