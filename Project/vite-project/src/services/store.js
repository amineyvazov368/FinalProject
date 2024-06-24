import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { CutsAPI } from "../services/CutsQuerySlice"
import {TeamsAPI} from "../services/TeamsQuerySlice"

export const store = configureStore({
  reducer: {
    [CutsAPI.reducerPath]: CutsAPI.reducer,
    [TeamsAPI.reducerPath]: TeamsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CutsAPI.middleware),
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TeamsAPI.middleware),
})


setupListeners(store.dispatch)


export default store;