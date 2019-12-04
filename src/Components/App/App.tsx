import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore, Middleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {combineEpics, createEpicMiddleware, Epic, EpicMiddleware} from 'redux-observable';
import { initializeCurrentLocation, State as RouterState } from 'redux-little-router';
import createBrowserHistory from 'history/createBrowserHistory';

import { Fragment, RouterActions } from 'redux-little-router';

import { enhancer, middleware, routesMiddleware, reducer as router } from './router';

import { MainAction } from "../Main/action";
import { MainContainer } from "../Main/MainContainer";
import { Reg } from '../Reg';
import { AppHeader } from '../AppHeader/AppHeader';
import { AuthContainer } from "../Auth/AuthContainer";
import {AuthAction} from "../Auth/actions";
import {auth} from "../Auth/reducers";
import {AuthState} from "../Auth/typings";
import {AuthDataProvider} from "../../api/AuthDataProvider";
import {host} from "../../common/constants";
import {authEpics} from "../Auth/epics";

export type Action =
    | MainAction
    | AuthAction
    | RouterActions;

export interface EpicDeps { authDataProvider: AuthDataProvider; }
export interface State extends RouterState { auth: AuthState; }

export type FuncEpic = Epic<Action, Action, State, EpicDeps>;

const createMiddleware = (epicMiddleware: EpicMiddleware<Action, Action, State, EpicDeps>) =>
    applyMiddleware(middleware, epicMiddleware, routesMiddleware);

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
      <Fragment forRoute="/">
        <Fragment forRoute="/">
          <AppHeader>
            <MainContainer message={'hello'}/>
          </AppHeader>
        </Fragment>
      </Fragment>
        <Fragment forRoute="/auth">
            <>
                <Fragment forRoute="/login">
                    <AuthContainer />
                </Fragment>
                <Fragment forRoute="/reg">
                    <Reg/>
                </Fragment>
            </>
        </Fragment>
    </Provider>
  )
};
