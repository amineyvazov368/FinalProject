import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { CutsAPI } from "./CutsQuerySlice"
import { TeamsAPI } from "./TeamsQuerySlice"
import { PricesAPI } from './PricesQuerySlice'

export const store = configureStore({
  reducer: {
    [CutsAPI.reducerPath]: CutsAPI.reducer,
    [TeamsAPI.reducerPath]: TeamsAPI.reducer,
    [PricesAPI.reducerPath]: PricesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      CutsAPI.middleware,
      TeamsAPI.middleware,
      PricesAPI.middleware
      ),
   
})


setupListeners(store.dispatch)


export default store;