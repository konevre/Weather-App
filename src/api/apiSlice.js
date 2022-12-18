import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const _apiKey = "e418a47a172d8f5a163ca9f1d327b2ed";
const _apiBase = "https://api.openweathermap.org/data/2.5";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: _apiBase }),
    endpoints: builder => ({
        getCurrentWeather: builder.query({
            query: city => `/weather?q=${city}&appid=${_apiKey}&units=metric`
        }),
        getTodayWeather: builder.query({
            query: city => `/forecast?q=${city}&appid=${_apiKey}&units=metric`
        }),
        getForecastWeather: builder.query({
            query: city => `/forecast?q=${city}&appid=${_apiKey}&units=metric`
        })
    })
});

export const { 
    useGetCurrentWeatherQuery, 
    useGetTodayWeatherQuery,
    useGetForecastWeatherQuery
} = apiSlice;