import React, { useState } from "react";
import { Container } from "../Container/Container";
import { Link } from "../Link/Link";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import "./Restore.css";

export const Restore: React.FC = (props: any) => {
  const [email, setEmail] = useState("");

  function handleEmailChange(e: any) {
    setEmail(e.target.value);
  }

  return (
    <>
      <Container type="container" comp="auth">
        <Container type="wrapper" comp="auth">
          <Container type="header" comp="auth">
            <Link href="/auth/login" comp="auth" color="gray" size="big">
              <span>SIGN IN</span>
            </Link>
            <Link href="/auth/reg" comp="auth" color="gray" size="big">
              <span>SIGN UP</span>
            </Link>
          </Container>
          <Container type="main" comp="auth">
            <Input
              value={email}
              onchange={handleEmailChange}
              placeholder="E-mail"
              type="email"
              comp="auth"
              size="big"
            />
            <Button size="big" comp="auth" color="blue">
              <span>SIGN UP</span>
            </Button>
          </Container>
        </Container>
      </Container>
    </>
  );
};
