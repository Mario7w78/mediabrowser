import { configureStore } from "@reduxjs/toolkit";
import dirCreateReducer from '../features/Dir/dirCreateSlice'
import crudDirReducer from '../features/Dir/crudDir'
import createPageUIReducer from '../features/createPageUI'
export const store = configureStore({
  reducer:{
    dircreate: dirCreateReducer,
    cruddir: crudDirReducer,
    createpageui: createPageUIReducer
  },
})

export default store