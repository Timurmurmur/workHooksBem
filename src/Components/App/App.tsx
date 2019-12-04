import createBrowserHistory from "history/createBrowserHistory";
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
  initializeCurrentLocation,
  State as RouterState
} from "redux-little-router";
import {
  combineEpics,
  createEpicMiddleware,
  EpicMiddleware
} from "redux-observable";

import { Fragment, RouterActions } from "redux-little-router";

import {
  enhancer,
  middleware,
  reducer as router,
  routesMiddleware
} from "./router";
import { AppHeader } from "../AppHeader/AppHeader";
import { Count } from "../Count/Count";
import { LoginAction, loginUser } from "../Login/action";
import { Login } from "../Login/Login";
import { MainAction } from "../Main/action";
import { MainContainer } from "../Main/MainContainer";
import { NewCount } from "../NewCount/NewCount";
import { Reg } from "../Reg/Reg";
import { Restore } from "../Restore/Restore";
import { Tasks } from "../Tasks/Tasks";
import { loginReducer } from "./reducers";
import { Partners } from "../Partners/Partners";
import { NewPartner } from "../NewPartner/NewPartner";
import { NewTasks } from "../NewTask/NewTask";

export type Action = LoginAction | RouterActions | MainAction;
export interface EpicDeps {
  /* nothing */
}
export interface State extends RouterState {
  // loginReducer: (State: State) => State;
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
    composeEnhancers(createMiddleware(epicMiddleware))
  );

  epicMiddleware.run(combineEpics());

  const initialState = store.getState();

  if (initialState && initialState.router) {
    store.dispatch(initializeCurrentLocation(initialState.router));
  }

  return (
    <Provider store={store}>
      <Fragment forRoute="/">
        <AppHeader>
          <Fragment forRoute="/">
            <MainContainer />
          </Fragment>
          <Fragment forRoute="/count/:type">
            <Count />
          </Fragment>
          <Fragment forRoute="/new-count/:type">
            <NewCount />
          </Fragment>
          <Fragment forRoute="/tasks">
            <Tasks />
          </Fragment>
          <Fragment forRoute="/partners">
            <Partners />
          </Fragment>
          <Fragment forRoute="/new-partner">
            <NewPartner />
          </Fragment>
          <Fragment forRoute="/new-task">
            <NewTasks />
          </Fragment>
        </AppHeader>
      </Fragment>
      <Fragment forRoute="/auth/login">
        <Login />
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
