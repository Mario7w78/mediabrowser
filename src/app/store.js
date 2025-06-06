import { configureStore } from "@reduxjs/toolkit";
import dirCreateReducer from '../features/Dir/dirCreateSlice'
import crudDirReducer from '../features/Dir/crudDir'
import crudPageReducer from '../features/Dir/crudPage'
import createPageUIReducer from '../features/createPageUI'
export const store = configureStore({
  reducer:{
    dircreate: dirCreateReducer,
    cruddir: crudDirReducer,
    crudpage: crudPageReducer,
    createpageui: createPageUIReducer
  },
})

export default store