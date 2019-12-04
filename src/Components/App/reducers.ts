import { Reducer } from "redux";
import { Action, State } from "./App";

export const loginReducer: Reducer = (State: State, Action: Action): State => {
  switch (Action.type) {
    default:
      return State;
  }
};
