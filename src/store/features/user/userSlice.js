import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  user: {},
  repos: [],
  isError: false,
  isSucces: false,
  isLoading: false,
  message: "Something went wrong. Please try again"
}

export const fetchRepos = createAsyncThunk(
  "profile/list",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${payload.user}/repos?per_page=4&sort=asc&page=${payload.page}`
      )
      return response.data
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

export const fetchUserProfile = createAsyncThunk(
  "repos/list",
  async (user, thunkAPI) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`)
      return response.data
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

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset: () => initialState
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.isSucces = true
        state.isError = false
        state.isLoading = false
        state.repos = action?.payload
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.isSucces = false
        state.isError = true
        state.isLoading = false
        state.message = action.payload
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isSucces = true
        state.isError = false
        state.isLoading = false
        state.user = action?.payload
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isSucces = false
        state.isError = true
        state.isLoading = false
        state.message = action.payload
      })
  }
})

export const { reset } = profileSlice.actions
export default profileSlice.reducer
