import React,{useState} from 'react';
import {Container} from '../../blocks/Container/Container';
import {Link} from '../../blocks/Link/Link';
import { Input } from '../../blocks/Input/Input';
import './style/style.css';
import { Button } from '../../blocks/Button/Button';
import { Checkbox } from '../../blocks/Checkbox/Checkbox';

export const Auth: React.FC = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange (e:any){
        setEmail(e.target.value);
    }

    function handlePasswordChange (e:any){
        setPassword(e.target.value);
    }

    return(<>
        <Container type="container" comp="auth">
            <Container type="wrapper" comp="auth">
                <Container type="header" comp="auth">
                    <Link href='/auth/login' comp="auth" color="blue" size="big" checked><span>SIGN IN</span></Link>
                    <Link href='/auth/reg' comp="auth" color="gray" size="big"><span>SIGN UP</span></Link>
                </Container>
                <Container type="main" comp="auth">
                    <Input value={email} placeholder="E-mail" type="email" comp="auth" size="big" onchange={handleEmailChange}/>
                    <Input value={password} placeholder="Password" type="password" comp="auth" size="big" onchange={handlePasswordChange}/>
                    <Button size="big" comp="auth" color="blue"><span>SIGN IN</span></Button>
                </Container>
                <Container type="footer" comp="auth">
                    <Checkbox comp="auth">remember me</Checkbox>
                    <Link href='/auth/restore' comp="auth" size="normal" color="blue"><span>Forgot password?</span></Link>
                </Container>
            </Container>
        </Container>
    </>)
}
