import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "www.metaweather.com" }),
  endpoints: (builder) => ({
    getLocation: builder.query<Location, string>({
      query: (location) => `/api/location/search/?query=${location}`,
    }),
  }),
});

export const { useLazyGetLocationQuery } = apiSlice;
