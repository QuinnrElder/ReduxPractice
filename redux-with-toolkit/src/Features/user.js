import {createSlice} from '@reduxjs/toolkit'

const defaultUser = {name: "",  age: 0,  email:""}

export const userSlice = createSlice({
  name: "user",
  initialState: {value: defaultUser},
  reducers: {
    login: (state, action) => {
        state.value = action.payload;
    },
    logout: (state) => {
      state.value = defaultUser
    }
  }
})
export const {login, logout} = userSlice.actions
export default  userSlice.reducer;
