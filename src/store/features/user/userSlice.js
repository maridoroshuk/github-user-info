import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  user: {},
  repos: [],
  isError: false,
  isSucces: false,
  isLoading: false,
  message: ""
}

export const fetchRepos = createAsyncThunk(
  "profile/list",
  async (user, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=10&sort=asc`
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

const userSlice = createSlice({
  name: "user",
  initialState,
  extrareducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.repos = action?.payload
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action?.payload
        console.log(`action.payload`)
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
      })
  }
})

export default userSlice.reducer
