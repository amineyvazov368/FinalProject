import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { CutsAPI } from "../services/CutsQuerySlice"

export const store = configureStore({
  reducer: {
    [CutsAPI.reducerPath]: CutsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CutsAPI.middleware),
})


setupListeners(store.dispatch)


export default store;