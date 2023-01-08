import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const _OpenWeatherAPIKey = "e418a47a172d8f5a163ca9f1d327b2ed";
    //   _geolocationAPIKey = "c6b672ea1cfa46b19344cadfc2eb4428";

const _openWeatherAPI = 'https://api.openweathermap.org/data/2.5';
    //   _geolocationAPI = 'https://api.ipgeolocation.io/ipgeo';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "/" }),
    endpoints: builder => ({
        getCurrentWeather: builder.query({
            query: city => `${_openWeatherAPI}/weather?q=${city}&appid=${_OpenWeatherAPIKey}&units=metric`
        }),
        getTodayWeather: builder.query({
            query: city => `${_openWeatherAPI}/forecast?q=${city}&appid=${_OpenWeatherAPIKey}&units=metric`
        }),
        getForecastWeather: builder.query({
            query: city => `${_openWeatherAPI}/forecast?q=${city}&appid=${_OpenWeatherAPIKey}&units=metric`
        }),
        // getIP: builder.query({
        //     query: () => `${_geolocationAPI}?apiKey=${_geolocationAPIKey}&fields=city`,
        // }),
    })
});

export const { 
    useGetCurrentWeatherQuery, 
    useGetTodayWeatherQuery,
    useGetForecastWeatherQuery,
    useGetIPQuery,
} = apiSlice;