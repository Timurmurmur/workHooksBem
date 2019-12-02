import {LOCATION_CHANGED, routerForBrowser} from "redux-little-router";
import {Dispatch, Middleware, MiddlewareAPI} from "redux";
import {Action, State} from "./App";

export enum RoutesPath {
    root = '/',
    notFound = '/404',
    login = '/auth/login',
    reg = '/auth/reg'
}

const routes = {
    [RoutesPath.root]: {
        title: 'Рабочий стол'
    },
    [RoutesPath.notFound]: {
        title: '404 - не найдено :('
    },
    [RoutesPath.login]: {
        title: 'Sign IN'
    },
    [RoutesPath.reg]: {
        title: 'Sign UP'
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