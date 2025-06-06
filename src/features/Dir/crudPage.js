import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    directoryid: "1",
    pagename: "Blackboard Ulima",
    pageurl: "https://ulima.blackboard.com/ultra/stream",
    description: "Plataforma de cursos virtuales de la Universidad de Lima",
  },
  {
    directoryid: "1",
    pagename: "MiUlima",
    pageurl: "https://webaloe.ulima.edu.pe/portalUL/inicio.jsp",
    description: "Portal de alumnos de la Universidad de Lima",
  },
  {
    directoryid: "1",
    pagename: "Google Drive",
    pageurl: "https://drive.google.com/",
    description: "Almacenamiento en la nube de Google",
  },
];

const crudPage = createSlice({
  name: "crudpage",
  initialState: initialState,
  reducers: {
    addPage: (state, action) => {
      if (!action.payload.pageurl.startsWith("https://")) {
        action.payload.pageurl = "https://" + action.payload.pageurl;
      }
      state.push(action.payload);
    },
  },
});

export const { addPage } = crudPage.actions;
export default crudPage.reducer;
