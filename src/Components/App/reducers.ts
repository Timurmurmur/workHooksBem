import { Reducer } from "redux";
import { Action, State } from "./App";
import { useStore } from "react-redux";

export const loginReducer: Reducer = (
  initialState: State,
  Action: Action
): State => {
  switch (Action.type) {
    default:
      return initialState;
  }
  return initialState;
};
