import axios from "axios";

export class Server {
  _url = "http://89.108.64.205";

  getResource = (path: string, resBody: any) => {
    return axios.post(this._url + path, resBody, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Origin: "*"
      }
    });
  };

  getAuth = (userData: any) => {
    const data = { email: "smirnovvad7@gmail.com", password: "123" };
    return this.getResource("/auth", data);
  };
}
