import { reducer } from "../lib/reducer";
import { store } from "../lib/store";

export type RootDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducer>;
