import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = "http://localhost:5050/api/";

export const TeamsAPI = createApi({
  reducerPath: 'TeamsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL  }),
  endpoints: (builder) => ({
    getTeams:builder.query({
        query:()=>`teams`
    }),

     // delete
     deleteTeams:builder.mutation({
        query:(id)=>({
            url:`teams/${id}`,
            method:"DELETE"
        })
     }),

         //  get id

    getTeamsById:builder.query({
        query:(id)=>({
            url:`teams/${id}`,
            method:"GET"
        })
    }),

    postTeams:builder.mutation({
        query:(newTeams)=>({
            url:`teams`,
            body:newTeams,
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              }
        })
    })

  }),
})  


export const { useGetTeamsQuery, useDeleteTeamsMutation, useGetTeamsByIdQuery, usePostTeamsMutation } = TeamsAPI