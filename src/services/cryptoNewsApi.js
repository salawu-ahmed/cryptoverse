import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news'
const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'ead67134c8msh030b0c59300d9b3p1134c8jsn5a649424bd65',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})

const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl: ""}),
    endpoints: (builder) => {
        getCryptoNews: builder.query({
            query: ({newsCategories, count}) => createRequest(`news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`)
    })
    }
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi