import { createSlice } from "@reduxjs/toolkit"

const createPageUI = createSlice({
  name: 'createpageui',
  initialState: false,
  reducers:{
    appearCreatePage: (state, action) => {
      return action.payload
    },
  }
})

export const {appearCreatePage} = createPageUI.actions
export default createPageUI.reducer