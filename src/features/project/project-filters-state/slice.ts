import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProjectFiltersState {
  searchTerms: string;
  isArchived: boolean;
}

const initialState: ProjectFiltersState = {
  searchTerms: "",
  isArchived: false,
};

export const projectFiltersSlice = createSlice({
  name: "projectFiltersState",
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<Partial<ProjectFiltersState>>) => {
      return { ...state, ...payload };
    },
  },
});
