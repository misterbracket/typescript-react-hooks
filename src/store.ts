import { createContext } from "react";

const initialState = {
  first: "Max",
  last: "Klammer",
};

export type UserState = typeof initialState;

const context = createContext<UserState>(initialState);

export default context;
