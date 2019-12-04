import React, {useCallback, useState} from 'react';
import {Container} from '../Container/Container';
import {Link} from '../Link/Link';
import {Input} from '../Input/Input';
import './style/style.css';
import {Button} from '../Button/Button';
import {Checkbox} from '../Checkbox/Checkbox';
import {PageStatus} from "../../common/typings";

export interface AuthProps {
    pageStatus: PageStatus;

    login: (email: string, password: string) => void;
}

export const Auth: React.FC<AuthProps> = ({ login, pageStatus }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChangeCallback = useCallback((e: MouseEvent) => {
        if (e.target) {
            setEmail((e.target as HTMLInputElement).value);
        }
    }, [email]);

    const handlePasswordChangeCallback = useCallback((e: MouseEvent) => {
        if (e.target) {
            setPassword((e.target as HTMLInputElement).value);
        }
    }, [password]);

    const loginCallback = useCallback(() => {
        login(email, password);
    }, [email, password, login]);

    return (
        <>
            <Container type="container" comp="auth">
                {pageStatus === PageStatus.LOADING ? 'LOADING...' : ''}
                <Container type="wrapper" comp="auth">
                    <Container type="header" comp="auth">
                        <Link href='/auth/login' comp="auth" color="blue" size="big" checked><span>SIGN IN</span></Link>
                        <Link href='/auth/reg' comp="auth" color="gray" size="big"><span>SIGN UP</span></Link>
                    </Container>
                    <Container type="main" comp="auth">
                        <Input value={email} placeholder="E-mail" type="email" comp="auth" size="big" onchange={handleEmailChangeCallback}/>
                        <Input value={password} placeholder="Password" type="password" comp="auth" size="big" onchange={handlePasswordChangeCallback}/>
                        <Button onClick={loginCallback} size="big" comp="auth" color="blue"><span>SIGN IN</span></Button>
                    </Container>
                    <Container type="footer" comp="auth">
                        <Checkbox comp="auth">remember me</Checkbox>
                        <Link href='/auth/restore' comp="auth" size="normal" color="blue"><span>Forgot password?</span></Link>
                    </Container>
                </Container>
            </Container>
        </>
    );
};
