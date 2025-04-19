import { configureStore } from "@reduxjs/toolkit";
import dirCreateReducer from '../features/Dir/dirCreateSlice'
export const store = configureStore({
  reducer:{
    dircreate: dirCreateReducer
  },
})

export default store