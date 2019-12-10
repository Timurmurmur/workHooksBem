import axios from "axios";
import { BaseRestDataProvider } from "./BaseRestDataProvider";

export class AuthDataProvider extends BaseRestDataProvider {
  public login(email: string, password: string) {
    return axios
      .post(
        `${this.host}auth`,
        { email, password },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Origin: "*"
          }
        }
      )
      .then(res =>
        localStorage.setItem("X_CSRF_TOKEN", res.headers["x-csrf-token"])
      );
  }
}
