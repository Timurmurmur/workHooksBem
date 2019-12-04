import {
  LOCATION_CHANGED,
  routerForBrowser,
  GO_BACK,
  goBack
} from "redux-little-router";
import {
  Dispatch,
  Middleware,
  MiddlewareAPI,
  Reducer,
  combineReducers
} from "redux";
import { Action, State } from "./App";
import { LOGIN_USER, loginUser } from "../Login/action";
import { useState, ReducerState } from "react";
import { useStore } from "react-redux";

export enum RoutesPath {
  root = "/",
  notFound = "/404",
  login = "/auth/login",
  reg = "/auth/reg",
  count = "/count/:type",
  newCount = "/new/count/:type",
  tasks = "/tasks"
}

const routes = {
  [RoutesPath.root]: {
    title: "Рабочий стол"
  },
  [RoutesPath.notFound]: {
    title: "404 - не найдено :("
  },
  [RoutesPath.login]: {
    title: "Sign IN"
  },
  [RoutesPath.reg]: {
    title: "Sign UP"
  },
  [RoutesPath.count]: {
    title: "Счета"
  },
  [RoutesPath.newCount]: {
    title: "Новый счет"
  },
  [RoutesPath.tasks]: {
    title: "Задачи"
  }
};

export const routesMiddleware: Middleware<{}, State, Dispatch<Action>> = (
  store: MiddlewareAPI<Dispatch<Action>>
): ((next: Dispatch<Action>) => (action: Action) => Action) => (
  next: Dispatch<Action>
): ((action: Action) => Action) => (action: Action): Action => {
  switch (action.type) {
    case LOCATION_CHANGED: {
      const { result } = action.payload;
      if (result && result.title) {
        document.title = result.title;
      }
      break;
    }
    default:
      break;
  }

  return next(action);
};

export const { reducer, enhancer, middleware } = routerForBrowser({ routes });

// export const loginReducer: Reducer<State, Action> = (
//   state: State = useStore().getState(),
//   action: Action
// ): State => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
