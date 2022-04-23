import { configureStore } from "@reduxjs/toolkit"
import userReduser from "./features/user/userSlice"

export const store = configureStore({
  reducer: {
    user: userReduser
  }
})
