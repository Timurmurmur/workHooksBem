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

export enum RoutesPath {
  root = "/",
  notFound = "/404",
  login = "/auth/login",
  reg = "/auth/reg",
  count = "/count/:type",
  newCount = "/new-count/:type",
  newPartner = "/new-partner",
  newTask = "/new-task",
  tasks = "/tasks",
  partners = "/partners",
  organization = "/organization",
  goods = "/goods",
  newGoods = "/new-goods"
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
  },
  [RoutesPath.partners]: {
    title: "Партнеры"
  },
  [RoutesPath.newPartner]: {
    title: "Новый партнер"
  },
  [RoutesPath.newTask]: {
    title: "Новая задача"
  },
  [RoutesPath.organization]: {
    title: "Наши организации"
  },
  [RoutesPath.goods]: {
    title: "Товары"
  },
  [RoutesPath.newGoods]: {
    title: "Новый товар"
  }
};
export const routesMiddleware: Middleware<State, State, Dispatch<Action>> = (
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
