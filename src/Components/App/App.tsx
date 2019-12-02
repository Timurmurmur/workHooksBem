import React from "react";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  combineEpics,
  createEpicMiddleware,
  EpicMiddleware
} from "redux-observable";
import {
  initializeCurrentLocation,
  State as RouterState
} from "redux-little-router";
import createBrowserHistory from "history/createBrowserHistory";

import { Fragment, RouterActions } from "redux-little-router";

import {
  enhancer,
  middleware,
  routesMiddleware,
  reducer as router
} from "./router";

import { MainAction } from "../Main/action";
import { MainContainer } from "../Main/MainContainer";
import { Reg } from "../Reg/Reg";
import { Auth } from "../Auth/Auth";
import { AppHeader } from "../AppHeader/AppHeader";
import { Main } from "../Main/Main";
import { Restore } from "../Restore/Reg";

export type Action = RouterActions | MainAction;
export interface EpicDeps {
  /* nothing */
}
export interface State extends RouterState {
  /* nothing */
}

const createMiddleware = (
  epicMiddleware: EpicMiddleware<Action, Action, State, EpicDeps>
) => applyMiddleware(middleware, epicMiddleware, routesMiddleware);

export const App: React.FC = () => {
  const history = createBrowserHistory();
  const composeEnhancers = composeWithDevTools({ serialize: true });
  const epicMiddleware = createEpicMiddleware<Action, Action, State, EpicDeps>({
    dependencies: {}
  });

  const store = createStore<State, Action, {}, {}>(
    combineReducers({ router }),
    composeEnhancers(enhancer, createMiddleware(epicMiddleware))
  );

  epicMiddleware.run(combineEpics());

  const initialState = store.getState();

  if (initialState && initialState.router) {
    store.dispatch(initializeCurrentLocation(initialState.router));
  }
  return (
    <Provider store={store}>
      <Fragment forRoute="/">
        <Fragment forRoute="/">
          <AppHeader>
            <MainContainer message={"hello"} />
          </AppHeader>
        </Fragment>
      </Fragment>
      <Fragment forRoute="/auth/login">
        <Auth />
      </Fragment>
      <Fragment forRoute="/auth/reg">
        <Reg />
      </Fragment>
      <Fragment forRoute="/auth/restore">
        <Restore />
      </Fragment>
    </Provider>
  );
};
