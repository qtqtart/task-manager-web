import { create } from "zustand";

type State = {
  isArchived: boolean;
  searchTerms: string;
};

interface ProjectFiltersStore extends State {
  set: (v: Partial<State>) => void;
}

export const useProjectFiltersStore = create<ProjectFiltersStore>((set) => ({
  isArchived: false,
  searchTerms: "",
  set: (v) => set({ ...v }),
}));
