import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { RootDispatch, RootState } from "../models/types";

export const useRootDispatch = useDispatch<RootDispatch>;
export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;
