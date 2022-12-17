import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const _apiKey = "6cf6cd0da4914f10b1ee0650e8712ea8";
const _apiBase = "https://api.openweathermap.org/data/2.5";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: _apiBase }),
    endpoints: builder => ({
        getCurrentWeather: builder.query({
            query: (city) => `/weather?q=${city}&appid=${_apiKey}&units=metric`
        })
    })
});

export const { useGetCurrentWeatherQuery } = apiSlice;