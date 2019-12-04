export const LOGIN_USER = "LOGIN_USER";
export type LOGIN_USER = typeof LOGIN_USER;

export interface loginUserAction {
  type: LOGIN_USER;
  payload: string;
}

export const loginUser = (token: string): loginUserAction => {
  return { type: LOGIN_USER, payload: token };
};

export type LoginAction = loginUserAction;
