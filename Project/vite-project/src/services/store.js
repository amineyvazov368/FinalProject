import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { CutsAPI } from "./CutsQuerySlice"
import { TeamsAPI } from "./TeamsQuerySlice"
import { PricesAPI } from './PricesQuerySlice'
import {BlogsAPI} from './BlogsQuerySlice'
import { SaysAPI } from './SaysQuerySlice'
import { UsersAPI } from './UsersQuerySlice'

export const store = configureStore({
  reducer: {
    [CutsAPI.reducerPath]: CutsAPI.reducer,
    [TeamsAPI.reducerPath]: TeamsAPI.reducer,
    [PricesAPI.reducerPath]: PricesAPI.reducer,
    [BlogsAPI.reducerPath]: BlogsAPI.reducer,
    [SaysAPI.reducerPath]: SaysAPI.reducer,
    [UsersAPI.reducerPath]: UsersAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      CutsAPI.middleware,
      TeamsAPI.middleware,
      PricesAPI.middleware,
      BlogsAPI.middleware,
      SaysAPI.middleware,
      UsersAPI.middleware
      ),
   
})


setupListeners(store.dispatch)


export default store;