import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = "http://localhost:5050/api/";

export const BlogsAPI = createApi({
  reducerPath: 'BlogsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL  }),
  endpoints: (builder) => ({
    getBlogs:builder.query({
        query:()=>`blogs`
    }),

     // delete
     deleteBlogs:builder.mutation({
        query:(id)=>({
            url:`blogs/${id}`,
            method:"DELETE"
        })
     }),

         //  get id

    getBlogsById:builder.query({
        query:(id)=>({
            url:`blogs/${id}`,
            method:"GET"
        })
    }),

    postBlogs:builder.mutation({
        query:(newBlogs)=>({
            url:`blogs`,
            body:newBlogs,
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              }
        })
    })

  }),
})  


export const { useGetBlogsQuery, useDeleteBlogsMutation, useGetBlogsByIdQuery,usePostBlogsMutation } = BlogsAPI