import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_LINK } from "@config/constants";
import { transformToQueryString } from "@utils/transformToQueryString";
import { getCharactersReq, getCharactersRes } from "./types";
import { MyBaseQueryFn } from "../apiBaseQueryFn";
import { ICharacter } from "@/interfaces";

export const rickandmortyApi = createApi({
  reducerPath: "rickandmortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_LINK }) as MyBaseQueryFn,
  endpoints: (builder) => ({
    getCharacters: builder.query<getCharactersRes, getCharactersReq>({
      query: (data) => `/${transformToQueryString(data)}`,
    }),
    getCharacter: builder.query<ICharacter, { id: string }>({
      query: ({ id }) => `/${id}`,
    }),
  }),
});
