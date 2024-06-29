import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = "http://localhost:5050/api/";

export const SaysAPI = createApi({
  reducerPath: 'SaysAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL  }),
  endpoints: (builder) => ({
    getSays:builder.query({
        query:()=>`says`
    }),

     // delete
     deleteSays:builder.mutation({
        query:(id)=>({
            url:`says/${id}`,
            method:"DELETE"
        })
     }),

         //  get id

    getSaysById:builder.query({
        query:(id)=>({
            url:`says/${id}`,
            method:"GET"
        })
    }),

    postSays:builder.mutation({
        query:(newSays)=>({
            url:`says`,
            body:newSays,
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              }
        })
    })

  }),
})  


export const { useGetSaysQuery, useDeleteSaysMutation, useGetSaysByIdQuery, usePostSaysMutation } = SaysAPI