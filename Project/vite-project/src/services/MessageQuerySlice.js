import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = "http://localhost:5050/api/";

export const MessageAPI = createApi({
  reducerPath: 'MessageAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL  }),
  endpoints: (builder) => ({
    getMessage:builder.query({
        query:()=>`message`
    }),

     // delete
     deleteMessage:builder.mutation({
        query:(id)=>({
            url:`message/${id}`,
            method:"DELETE"
        })
     }),

         //  get id

    getMessageById:builder.query({
        query:(id)=>({
            url:`message/${id}`,
            method:"GET"
        })
    }),

    postMessage:builder.mutation({
        query:(newMessage)=>({
            url:`message`,
            body:newMessage,
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              }
        })
    })

  }),
})  


export const { useGetMessageQuery, useDeleteMessageMutation, useGetMessageByIdQuery, usePostMessageMutation  } = MessageAPI