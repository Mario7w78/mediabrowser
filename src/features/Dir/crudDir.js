import { createSlice } from "@reduxjs/toolkit"
import { act } from "react"

const initialState =[
  {
    imgurl: "/default.svg",
    name: "Classic Pages",
    id: "1",
    selected: true,
    pages: [
      {
        pagename: "Blackboard Ulima",
        pageurl: "https://ulima.blackboard.com/ultra/stream",
        description: "Plataforma de cursos virtuales de la Universidad de Lima"
      },
      {
        pagename: "MiUlima",
        pageurl: "https://webaloe.ulima.edu.pe/portalUL/inicio.jsp",
        description: "Portal de alumnos de la Universidad de Lima"

      },
      {
        pagename: "Google Drive",
        pageurl: "https://drive.google.com/",
        description: "Almacenamiento en la nube de Google"
      },

      
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
    },

    savePage: (state, action) => {
      state.forEach(dir => {
        if (dir.id == action.payload.id) {
          if (!action.payload.page.pageurl.startsWith("https://")){
            action.payload.page.pageurl = "https://" + action.payload.page.pageurl;
            
          }
          dir.pages.push(action.payload.page)
        }
      })
    }
    

}})

export const {addDir, turnFalse, turnTrue, savePage} = crudDir.actions
export default crudDir.reducer