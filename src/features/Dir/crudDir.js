import { createSlice } from "@reduxjs/toolkit"

const initialState =[
  {
    imgurl: "/default.svg",
    name: "Classic Pages",
    id: "1",
    selected: true,
    pages: [
      {
        pagename: "Ulima",
        pageurl: "https://ulima.edu.pe"
      }
    ]
  }
] 

const crudDir = createSlice({

  name:'cruddir',
  initialState: initialState,
  reducers: {
    addDir: (state, action) => {
      state.push(action.payload)

    },

    turnFalse: (state,action) => {
      state.forEach(dir =>{
        if (dir.id != action.payload){
          dir.selected = false
        }else{
          dir.selected = true
        }
      })
    }


  }

})

export const {addDir, turnFalse, turnTrue} = crudDir.actions
export default crudDir.reducer