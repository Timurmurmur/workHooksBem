export const LOGIN = 'LOGIN';
export type LOGIN = typeof LOGIN;

export interface LoginAction {
    type: LOGIN;
    password: string;
    email: string;
}

export const login = (email: string, password: string): LoginAction => {
    return {
        type: LOGIN,
        password,
        email
    };
};

export const LOGIN_ERROR = 'LOGIN_ERROR';
export type LOGIN_ERROR = typeof LOGIN_ERROR;

export interface LoginErrorAction {
    type: LOGIN_ERROR;
    error?: string;
}

export const loginError = (error?: string): LoginErrorAction => {
    return {
        type: LOGIN_ERROR,
        error
    };
};


export type AuthAction = LoginAction | LoginErrorAction;
