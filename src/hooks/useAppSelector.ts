import { TypedUseSelectorHook, useSelector } from "react-redux";
import { State } from "../types";

const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export { useAppSelector }