import React, {useState} from 'react';
import {Container} from '../Container/Container';
import {Link} from '../Link/Link';
import { Input } from '../Input/Input';
import './style/style.css';
import { Button } from '../Button/Button';


export const Reg: React.FC = (props: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');


    function handleEmailChange (e:any){
        setEmail(e.target.value);
    }

    function handlePasswordChange (e:any){
        setPassword(e.target.value);
    }

    function handleUserNameChange (e:any){
        setUserName(e.target.value);
    }
    
    return(<>
        <Container type="container" comp="auth">
            <Container type="wrapper" comp="auth">
                <Container type="header" comp="auth">
                    <Link href='/auth/login' comp="auth" color="gray" size="big"><span>SIGN IN</span></Link>
                    <Link href='/auth/reg' comp="auth" color="blue" size="big" checked><span>SIGN UP</span></Link>
                </Container>
                <Container type="main" comp="auth">
                    <Input value={userName} placeholder="User name" type="text" comp="auth" size="big" onchange={handleUserNameChange}/>
                    <Input value={email} placeholder="E-mail" type="email" comp="auth" size="big" onchange={handleEmailChange}/>
                    <Input value={password} placeholder="Password" type="password" comp="auth" size="big" onchange={handlePasswordChange}/>
                    <Button size="big" comp="auth" color="blue"><span>SIGN UP</span></Button>
                </Container>
                <Container type="footer" comp="reg">
                    <span>By creating an account, you agree to our </span>
                    <Link href='#' comp="auth" size="normal" color="blue"><span>terms</span></Link>
                </Container>
            </Container>
        </Container>
    </>)
}
