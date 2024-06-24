import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = "http://localhost:5050/api/";

export const PricesAPI = createApi({
  reducerPath: 'PricesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL  }),
  endpoints: (builder) => ({
    getPrices:builder.query({
        query:()=>`prices`
    }),

     // delete
     deletePrices:builder.mutation({
        query:(id)=>({
            url:`prices/${id}`,
            method:"DELETE"
        })
     }),

         //  get id

    getPricesById:builder.query({
        query:(id)=>({
            url:`prices/${id}`,
            method:"GET"
        })
    }),

    postPrices:builder.mutation({
        query:(newPrices)=>({
            url:`prices`,
            body:newPrices,
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              }
        })
    })

  }),
})  


export const { useGetPricesQuery, useDeletePricesMutation, usePostPricesMutation, useGetPricesByIdQuery } = PricesAPI