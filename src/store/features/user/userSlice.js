import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  user: "",
  repos: [],
  isError: false,
  isSucces: false,
  isLoading: false,
  message: ""
}

const config = {
  headers: {
    Authorization: `Token ${procces.env.GITHUB_TOKEN}`
  }
}
//test
export const fetchRepos = creaateAsyncThunk(
  "profile/list",
  async (user, thunkAPI) => {
    try {
      return await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=700&sort=asc`,
        config
      )
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const fetchUserProfile = creaateAsyncThunk(
  "repos/list",
  async (user, thunkAPI) => {
    try {
      return await axios.get(`https://api.github.com/users/${user}`, config)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  extrareducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchRepos.fulfiled, (state, action) => {
        state.repos = action?.payload
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchUserProfile.fulfiled, (state, action) => {
        state.user = action?.payload
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
      })
  }
})

export default userSlice.reducer
