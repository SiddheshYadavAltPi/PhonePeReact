import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getData = createAsyncThunk('data/getData',async ()=>{
  return fetch('https://randomuser.me/api/?inc=phone,name,picture&results=15').then((res)=>res.json());
})


const userDataSlice = createSlice(({
  name :'userData',
  initialState:{
    userData:[],
  },
  extraReducers:{
    [getData.fulfilled]: (state,action)=>{
      state.userData = action.payload.results;
    }
  }
}))
// Action creators are generated for each case reducer function

export default userDataSlice.reducer;