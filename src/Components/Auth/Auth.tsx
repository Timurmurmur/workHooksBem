import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";
import { Link } from "../Link/Link";
import "./Auth.css";
import { emailChecker, passChecker } from "./helper";

export const Auth: React.FC = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState();
  const [passError, setPassError] = useState();

  function handleEmailChange(e: any) {
    setEmail(e.target.value);
    setEmailError(emailChecker(e.target.value));
    console.log(emailError);
  }

  function handlePasswordChange(e: any) {
    setPassword(e.target.value);
    setPassError(passChecker(e.target.value));
    console.log(passError);
  }

  return (
    <>
      <Container type="container" comp="auth">
        <Container type="wrapper" comp="auth">
          <Container type="header" comp="auth">
            <Link
              href="/auth/login"
              comp="auth"
              color="blue"
              size="big"
              checked
            >
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
            <Button size="big" comp="auth" color="blue">
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
    </>
  );
};
