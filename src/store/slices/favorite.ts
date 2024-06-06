import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ICharacter } from "@/interfaces/index";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [] as ICharacter[],
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<ICharacter>) => {
      state.push(payload);
    },
    removeFavorite: (state, { payload }: PayloadAction<ICharacter>) => {
      return state.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
