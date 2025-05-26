import { reducer } from "./lib/reducers";
import { store } from "./lib/store";

export type RootState = ReturnType<typeof reducer>;
export type RootDispatch = typeof store.dispatch;
