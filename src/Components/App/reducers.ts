import { Reducer } from "redux";
import { Action, State } from "./App";
import { useStore } from "react-redux";

export const loginReducer: Reducer = (State: State, Action: Action): State => {
  switch (Action.type) {
    default:
      return State;
  }
  return useStore().getState();
};
