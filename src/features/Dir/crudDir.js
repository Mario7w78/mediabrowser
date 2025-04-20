import { createSlice } from "@reduxjs/toolkit"

const initialState =[
  {
    imgurl: "/default.svg",
    name: "Classic Pages",
  }
] 

const crudDir = createSlice({

  name:'cruddir',
  initialState: initialState,
  reducers: {
    addDir: (state, action) => {
      state.push(action.payload)
      console.log(action)

    }
  }

})

export const {addDir} = crudDir.actions
export default crudDir.reducer