import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'black'
  },
  reducers: {
    black: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = "black"
    },
    blue: state => {
      state.value = "blue"
    }
  }
})

// Action creators are generated for each case reducer function
export const { black, blue } = themeSlice.actions

export default themeSlice.reducer