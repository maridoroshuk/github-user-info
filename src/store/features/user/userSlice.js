import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  state: "",
  user: {},
  repos: [],
  page: 1,
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
      const message = error?.response?.data?.message || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const fetchUserProfile = createAsyncThunk(
  "repos/list",
  async (user, thunkAPI) => {
    try {
      thunkAPI.dispatch(reset())
      const response = await axios.get(`https://api.github.com/users/${user}`)
      return response.data
    } catch (error) {
      const message = (error.response
        && error.response.data
        && error.response.data.message)
        || error.message
        || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset: () => initialState,
    setPage: (state, action) => {
      state.page = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.state = "loading"
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.state = "succes"
        state.repos = action?.payload
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.state = "error"
        state.message = action.payload
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.state = "loading"
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.state = "succes"
        state.user = action?.payload
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.state = "error"
        state.message = action.payload
      })
  }
})

export const { reset, setPage } = profileSlice.actions