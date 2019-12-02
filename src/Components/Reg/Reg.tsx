import React, { useState } from "react";
import { Container } from "../Container/Container";
import { Link } from "../Link/Link";
import { Input } from "../Input/Input";
import "./Reg.css";
import { Button } from "../Button/Button";
import { emailChecker, passChecker, userNameChecker } from "./helpers";

export const Reg: React.FC = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);

  function handleEmailChange(e: any) {
    setEmailError(emailChecker(e.target.value));
    setEmail(e.target.value);
    console.log(emailError);
  }

  function handlePasswordChange(e: any) {
    setPassError(passChecker(e.target.value));
    setPassword(e.target.value);
    console.log(passError);
  }

  function handleUserNameChange(e: any) {
    setUserNameError(userNameChecker(e.target.value));
    setUserName(e.target.value);
    console.log(userNameError);
  }

  return (
    <>
      <Container type="container" comp="auth">
        <Container type="wrapper" comp="auth">
          <Container type="header" comp="auth">
            <Link href="/auth/login" comp="auth" color="gray" size="big">
              <span>SIGN IN</span>
            </Link>
            <Link href="/auth/reg" comp="auth" color="blue" size="big" checked>
              <span>SIGN UP</span>
            </Link>
          </Container>
          <Container type="main" comp="auth">
            <Input
              value={userName}
              placeholder="User name"
              type="text"
              comp="auth"
              size="big"
              onchange={handleUserNameChange}
              error={userNameError}
            />
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
              <span>SIGN UP</span>
            </Button>
          </Container>
          <Container type="footer" comp="reg">
            <span>By creating an account, you agree to our </span>
            <Link href="#" comp="auth" size="normal" color="blue">
              <span>terms</span>
            </Link>
          </Container>
        </Container>
      </Container>
    </>
  );
};
