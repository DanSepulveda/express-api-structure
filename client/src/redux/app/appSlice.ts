import { createSlice } from '@reduxjs/toolkit'

// TODO: define user props
interface InitialState {
  logged: boolean
  theme: string
  user: unknown
}

const initialState: InitialState = {
  logged: false,
  theme: 'default',
  user: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.logged = true
      // TODO: get theme from payload
      state.theme = 'indigo'
      state.user = payload
    },
    logoutUser: () => initialState,
  },
})

export const { loginUser, logoutUser } = appSlice.actions
export const appState = (state: { app: InitialState }) => state.app
export default appSlice.reducer
