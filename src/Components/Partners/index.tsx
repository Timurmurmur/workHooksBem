import React from 'react';
import { Container } from '../../blocks/Container/Container';
import { Link } from '../../blocks/Link/Link';
import { Input } from '../../blocks/Input/Input';
import './style/style.css';
import { Button } from '../../blocks/Button/Button';
import logo from '../../assets/icons/logo-2.svg';

export class Partners extends React.Component<any,any>{


    render(){
        return(
            <>
             <Container comp="compNav" type="container">
                    <Container comp="compNav" type="wrapper">
                        <ul>
                            {
                                <>
                                    <li>
                                        <Link comp="compNav" color="blue" size="normal" href="/count/income" checked>
                                            <span>КЛИЕНТЫ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link comp="compNav" color="gray" size="normal" href="/count/outgoing">
                                            <span>ПОСТАВЩИКИ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link comp="compNav" color="gray" size="normal" href="/count/outgoing">
                                            <span>ПРОЧИЕ</span>
                                        </Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </Container>
                </Container>
            <Container comp="compTitle" type="wrapper">
                <div className="compTitle__left">
                    <h1>Партнеры</h1>
                    <Input comp="compTitle" type="text" placeholder="Search…" size="normal"/>
                    <i className="fas fa-search"></i>
                </div>
                <div className="compTitle__right">
                    
                    {
                        this.props.match.params.type === 'income' ?
                        <>
                            <Link href="/new/count/income" comp="compTitle" color="blue" size="normal">
                            </Link>
                        </>
                        :
                        <>
                            <Link href="/new/count/outgoing" comp="compTitle" color="blue" size="normal">
                            </Link>
                        </>
                    }
                </div>
            </Container>
            <div className="container container_comp_partners wrapper wrapper_comp_card">
                <div className="wrapper wrapper_comp_partners">
                    <div className="partners__title">
                        <span>Рога и Копыта, ООО</span>
                        <img src={logo} alt=""/>
                    </div>
                    <table className="table table_comp_partners">
                        <tr>
                            <th><span className="table__bold">Руководитель</span></th>
                            <th><span className="table__gray">Пупкин В.В.</span></th>
                        </tr>
                        <tr>
                            <th><span className="table__bold">Бухгалтер</span></th>
                            <th><span className="table__gray">Пупкин В.В.</span></th>
                        </tr>
                        <tr>
                            <th><span className="table__bold">ИНН/КПП</span></th>
                            <th><span className="table__gray">2102020002/1121201</span></th>
                        </tr>
                    </table>
                    <span className="table__gray partners__adress">127035, г. Москва, ул. Новый Арбат 1, оф. 3, стр. 2</span>
                    <table className="table table_comp_partners">
                        <tr>
                            <th><span className="table__bold">Телефоны</span></th>
                            <th><span className="table__gray">+7 (495) 123-45-67</span></th>
                        </tr>
                        <tr>
                            <th><span className="table__bold">E-mail</span></th>
                            <th><span className="table__gray">info@site.com</span></th>
                        </tr>
                        <tr>
                            <th><span className="table__bold">Сайт</span></th>
                            <th><span className="table__gray">www.site.com</span></th>
                        </tr>
                    </table>
                    <div className="container container_comp_debt">
                        <div className="wrapper wrapper_comp_debt">
                            <span className="table__gray">Наш долг</span>
                            <span>10 500 ₽</span>
                        </div>
                        <div className="wrapper wrapper_comp_credit">
                            <span className="table__gray">Долг партнера</span>
                            <span>10 500 ₽</span>
                        </div>
                    </div>
                    <Button comp="partners" size="" color=""><span>Список документов</span></Button>
                </div>
            </div>
            </>
        )
    }
}