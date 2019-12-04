import axios from 'axios';
import {BaseRestDataProvider} from "./BaseRestDataProvider";

export class AuthDataProvider extends BaseRestDataProvider {
    public login(email: string, password: string) {
        return axios.post(`${this.host}auth/`, { email, password });
    }
}
