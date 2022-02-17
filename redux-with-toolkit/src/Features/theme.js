import {createSlice} from '@reduxjs/toolkit'

const defaultColor = "black"

export const themeSlice = createSlice({
  name: "theme",
  initialState: {value: defaultColor},
  reducers: {
    changeColor: (state, action) => {
        state.value = action.payload;
    },
  }
})
export const {changeColor} = themeSlice.actions
export default  themeSlice.reducer;
