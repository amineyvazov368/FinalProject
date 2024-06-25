import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = "http://localhost:5050/api/";

export const CutsAPI = createApi({
  reducerPath: 'CutsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL  }),
  endpoints: (builder) => ({
    getCuts:builder.query({
        query:()=>`cuts`
    }),

     // delete
     deleteCuts:builder.mutation({
        query:(id)=>({
            url:`cuts/${id}`,
            method:"DELETE"
        })
     }),

         //  get id

    getCutsById:builder.query({
        query:(id)=>({
            url:`cuts/${id}`,
            method:"GET"
        })
    }),

    postCuts:builder.mutation({
        query:(newCuts)=>({
            url:`cuts`,
            body:newCuts,
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              }
        })
    })

  }),
})  


export const { useGetCutsQuery, useDeleteCutsMutation, useGetCutsByIdQuery, usePostCutsMutation  } = CutsAPI