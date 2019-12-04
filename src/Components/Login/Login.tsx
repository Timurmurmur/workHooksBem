import React, { useState, Dispatch } from "react";
import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";
import { Link } from "../Link/Link";
import { emailChecker, passChecker } from "./helper";
import { useDispatch, useSelector, useStore } from "react-redux";
import "./Login.css";
import { Server } from "../../Server/Server";

export const Login: React.FC = props => {
  const server = new Server();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState();
  const [passError, setPassError] = useState();
  const dispatch = useDispatch();
  const store = useStore();

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
    setEmailError(emailChecker(e.target.value));
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
    setPassError(passChecker(e.target.value));
  };

  const getAuth = (e: any) => {
    const res = server.getAuth({ email, password }).then(response =>
      dispatch({
        type: "LOGIN_USER",
        payload: response.headers["x-csrf-token"]
      })
    );
  };

  return (
    <Container type="container" comp="auth">
      <Container type="wrapper" comp="auth">
        <Container type="header" comp="auth">
          <Link href="/auth/login" comp="auth" color="blue" size="big" checked>
            <span>SIGN IN</span>
          </Link>
          <Link href="/auth/reg" comp="auth" color="gray" size="big">
            <span>SIGN UP</span>
          </Link>
        </Container>
        <Container type="main" comp="auth">
          <Input
            value={email}
            placeholder="E-mail"
            type="email"
            comp="auth"
            size="big"
            onchange={handleEmailChange}
            error={emailError}
          />
          <Input
            value={password}
            placeholder="Password"
            type="password"
            comp="auth"
            size="big"
            onchange={handlePasswordChange}
            error={passError}
          />
          <Button onClick={getAuth} size="big" comp="auth" color="blue">
            <span>SIGN IN</span>
          </Button>
        </Container>
        <Container type="footer" comp="auth">
          <Checkbox comp="auth">remember me</Checkbox>
          <Link href="/auth/restore" comp="auth" size="normal" color="blue">
            <span>Forgot password?</span>
          </Link>
        </Container>
      </Container>
    </Container>
  );
};
