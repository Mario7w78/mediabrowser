import { configureStore } from "@reduxjs/toolkit";
import dirCreateReducer from '../features/Dir/dirCreateSlice'
import crudDirReducer from '../features/Dir/crudDir'
export const store = configureStore({
  reducer:{
    dircreate: dirCreateReducer,
    cruddir: crudDirReducer
  },
})

export default store