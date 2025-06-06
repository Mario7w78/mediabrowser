import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    imgurl: "/default.svg",
    name: "Classic Pages",
    id: "1",
    selected: true,
  },
];

const crudDir = createSlice({
  name: "cruddir",
  initialState: initialState,
  reducers: {
    addDir: (state, action) => {
      state.push(action.payload);
    },

    turnFalse: (state, action) => {
      state.forEach((dir) => {
        if (dir.id != action.payload) {
          dir.selected = false;
        } else {
          dir.selected = true;
        }
      });
    },

    savePage: (state, action) => {
      state.forEach((dir) => {
        if (dir.id == action.payload.id) {
          if (!action.payload.page.pageurl.startsWith("https://")) {
            action.payload.page.pageurl =
              "https://" + action.payload.page.pageurl;
          }
          dir.pages.push(action.payload.page);
        }
      });
    },
  },
});

export const { addDir, turnFalse, turnTrue, savePage } = crudDir.actions;
export default crudDir.reducer;
