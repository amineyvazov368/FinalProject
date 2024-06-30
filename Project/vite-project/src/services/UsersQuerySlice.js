import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = "http://localhost:5050/api/";

export const UsersAPI = createApi({
  reducerPath: 'UsersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL  }),
  endpoints: (builder) => ({
    getUsers:builder.query({
        query:()=>`users`
    }),

     // delete
     deleteUsers:builder.mutation({
        query:(id)=>({
            url:`users/${id}`,
            method:"DELETE"
        })
     }),

         //  get id

    getUsersById:builder.query({
        query:(id)=>({
            url:`users/${id}`,
            method:"GET"
        })
    }),

    postUsers:builder.mutation({
        query:(newUsers)=>({
            url:`users`,
            body:newUsers,
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              }
        })
    })

  }),
})  


export const { useGetUsersQuery, useDeleteUsersMutation, useGetUsersByIdQuery, usePostUsersMutation } = UsersAPI