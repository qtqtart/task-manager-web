import { PaletteMode } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeModeState {
  themeMode: PaletteMode;
}

const initialState: ThemeModeState = {
  themeMode: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
};

export const themeModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<ThemeModeState>) => {
      state.themeMode = payload.themeMode;
    },
    toggle: (state) => {
      state.themeMode = state.themeMode === "dark" ? "light" : "dark";
    },
  },
});
