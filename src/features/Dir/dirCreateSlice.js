import { createSlice } from "@reduxjs/toolkit"


const dirCreateSlice = createSlice({
  name: 'dircreate',
  initialState: false,
  reducers:{
    appearCreate: (state, action) => {
      return action.payload
    },
}

})

export const {appearCreate} = dirCreateSlice.actions
export default dirCreateSlice.reducer