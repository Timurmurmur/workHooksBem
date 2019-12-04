import {combineEpics, ofType} from "redux-observable";
import {FuncEpic} from "../App/App";
import {LOGIN, LoginAction, loginError} from "./actions";
import {catchError, switchMap} from "rxjs/operators";
import { from, of} from "rxjs";
import {changeLocation} from "../../common/helpers";

const loginEpic: FuncEpic = (action$, store$, deps) => {
    return action$.pipe(
        ofType(LOGIN),
        switchMap(({ email, password }: LoginAction) => {
            return from(deps.authDataProvider.login(email, password)).pipe(
                switchMap(() => {
                    return of(changeLocation('/', false));
                }),
                catchError((e) => {
                    return of(loginError(e.message));
                })
            )
        })
    );
};

export const authEpics = combineEpics(loginEpic);
