import { createSlice } from "@reduxjs/toolkit"

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
    }


  }

})

export const {addDir, turnFalse, turnTrue} = crudDir.actions
export default crudDir.reducer