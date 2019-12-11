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
  Epic,
  EpicMiddleware
} from "redux-observable";

import { Fragment, RouterActions } from "redux-little-router";

import {
  enhancer,
  middleware,
  reducer as router,
  routesMiddleware
} from "./router";

import { AuthDataProvider } from "../../api/AuthDataProvider";
import { host } from "../../common/constants";
import { AppHeader } from "../AppHeader/AppHeader";
import { AuthAction } from "../Auth/actions";
import { AuthContainer } from "../Auth/AuthContainer";
import { authEpics } from "../Auth/epics";
import { auth } from "../Auth/reducers";
import { AuthState } from "../Auth/typings";
import { Count } from "../Count/Count";
import { MainAction } from "../Main/action";
import { MainContainer } from "../Main/MainContainer";
import { NewCount } from "../NewCount/NewCount";
import { NewPartner } from "../NewPartner/NewPartner";
import { NewTasks } from "../NewTask/NewTask";
import { Partners } from "../Partners/Partners";
import { Reg } from "../Reg/Reg";
import { Tasks } from "../Tasks/Tasks";
import { Restore } from "../Restore/Restore";
import { Organization } from "../Organization/Organizations";
import { Goods } from "../Goods/Goods";
import { NewGoods } from "../NewGoods/NewGoods";
import { isLogged } from "./isLogged";

export type Action = MainAction | AuthAction | RouterActions;
// smirnovvad7@gmail.com
export interface EpicDeps {
  authDataProvider: AuthDataProvider;
}
export interface State extends RouterState {
  auth: AuthState;
}

export type FuncEpic = Epic<Action, Action, State, EpicDeps>;

const createMiddleware = (
  epicMiddleware: EpicMiddleware<Action, Action, State, EpicDeps>
) => applyMiddleware(middleware, epicMiddleware, routesMiddleware);

export const App: React.FC = () => {
  const history = createBrowserHistory();
  const composeEnhancers = composeWithDevTools({ serialize: true });
  const epicMiddleware = createEpicMiddleware<Action, Action, State, EpicDeps>({
    dependencies: {
      authDataProvider: new AuthDataProvider(host)
    }
  });

  const store = createStore<State, Action, {}, {}>(
    combineReducers({ router, auth }),
    composeEnhancers(enhancer, createMiddleware(epicMiddleware))
  );

  epicMiddleware.run(combineEpics(authEpics));

  const initialState = store.getState();

  if (initialState && initialState.router) {
    store.dispatch(initializeCurrentLocation(initialState.router));
  }
  return (
    <Provider store={store}>
      <Fragment forRoute="/auth/login">
        <AuthContainer />
      </Fragment>
      <Fragment forRoute="/auth/reg">
        <Reg />
      </Fragment>
      <Fragment forRoute="/auth/restore">
        <Restore />
      </Fragment>
      <Fragment forRoute="/">
        <div>
          <Fragment forRoute="/">
            <AppHeader>
              <MainContainer />
            </AppHeader>
          </Fragment>
          <Fragment forRoute="/count/:type">
            <AppHeader>
              <Count />
            </AppHeader>
          </Fragment>
          <Fragment forRoute="/tasks">
            <AppHeader>
              <Tasks />
            </AppHeader>
          </Fragment>
          <Fragment forRoute="/partners">
            <AppHeader>
              <Partners />
            </AppHeader>
          </Fragment>
          <Fragment forRoute="/organization">
            <AppHeader>
              <Organization />
            </AppHeader>
          </Fragment>
          <Fragment forRoute="/goods">
            <AppHeader>
              <Goods />
            </AppHeader>
          </Fragment>
          <Fragment forRoute="/new">
            <div>
              <AppHeader>
                <Fragment forRoute="/count/:type">
                  <NewCount />
                </Fragment>
                <Fragment forRoute="/new/partner">
                  <NewPartner />
                </Fragment>
                <Fragment forRoute="/new/task">
                  <NewTasks />
                </Fragment>
                <Fragment forRoute="/new/goods">
                  <NewGoods />
                </Fragment>
              </AppHeader>
            </div>
          </Fragment>
        </div>
      </Fragment>
    </Provider>
  );
};
