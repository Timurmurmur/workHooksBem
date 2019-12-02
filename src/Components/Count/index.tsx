import React, { Component } from 'react';
import { Container } from '../Container/Container';
import { Link } from '../Link/Link';
import { Input } from '../Input/Input';
import './style/style.css';
import { Redirect } from 'react-router';


interface IState{
    
}

export const Count: React.FC = (props:any) =>{
    switch(props.match.params.type){
        case 'income':
            return(<><Income {...props}></Income></>)
        case 'outgoing':
            return(<><Income {...props}></Income></>);
        default:
            return(<><Redirect to="/count/income"/></>);
    }
}

export class Income extends Component<any,IState>{
    constructor(props:any){
        super(props);

        this.state = {

        }
    }
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return(<>
            <Container comp="countIncome" type="wrapper">
                <Container comp="compNav" type="container">
                    <Container comp="compNav" type="wrapper">
                        <ul>
                            {
                                this.props.match.params.type === 'income' ?
                                <>
                                    <li>
                                        <Link comp="compNav" color="blue" size="normal" href="/count/income" checked>
                                            <span>СЧЕТА ВХОДЯЩИЕ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link  comp="compNav" color="gray" size="normal" href="/count/outgoing">
                                            <span>СЧЕТА ИСХОДЯЩИЕ</span>
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link comp="compNav" color="gray" size="normal" href="/count/income">
                                            <span>СЧЕТА ВХОДЯЩИЕ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link comp="compNav" color="blue" size="normal" href="/count/outgoing" checked>
                                            <span>СЧЕТА ИСХОДЯЩИЕ</span>
                                        </Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </Container>
                </Container>
                <Container comp="compTitle" type="wrapper">
                    <div className="compTitle__left">
                        {
                            this.props.match.params.type === 'income' ?
                            <>
                                <h1>Счета входящие</h1>
                            </>
                            :
                            <>
                                <h1>Счета исходящие</h1>
                            </>
                        }
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
                <div className="wrapper wrapper_comp_card container_comp_count">
                    <div className="wrapper wrapper_comp_count">
                        <div className="count__title count_color_blue">
                            <span>НОВЫЙ (1)</span>
                        </div>
                        <div className="count__price">
                            <span>10 500 ₽</span>
                        </div>
                        <div className="count__plus">
                            <span>+</span>
                        </div>
                        <Container type="container" comp="compCard">
                            <Container comp="compCard" type="wrapper">
                                <div className="countCard__options">
                                    <div className="countCard__pen">
                                        <i className="fas fa-pencil-alt"></i>
                                    </div>
                                    <div className="countCard__trash">
                                        <i className="fas fa-trash-alt"></i>
                                    </div>
                                </div>
                                <div className="countCard__top">
                                    <div className="countCard__title"><span>Счет №1 от 02.02.2019</span></div>
                                    <div className="countCard__price"><span>12 000 ₽</span></div>
                                </div>
                                <div className="countCard__bottom">
                                    <table>
                                        <tr>
                                            <td className="countCard__bold">Организация</td>
                                            <td className="countCard__gray">ООО “Бизнес Сеть”</td>
                                        </tr>
                                        <tr>
                                            <td className="countCard__bold">Клиент</td>
                                            <td className="countCard__gray">ООО “Рога и копыта”</td>
                                        </tr>
                                    </table>
                                    <table>
                                        <tr>
                                            <td className="countCard__bold">
                                                Дата оплаты
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="countCard__gray">
                                            10.11.2016
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </Container>
                            <Container comp="compCard" type="wrapper">
                                <div className="countCard__options">
                                    <div className="countCard__pen">
                                        <i className="fas fa-pencil-alt"></i>
                                    </div>
                                    <div className="countCard__trash">
                                        <i className="fas fa-trash-alt"></i>
                                    </div>
                                </div>
                                <div className="countCard__top">
                                    <div className="countCard__title"><span>Счет №1 от 02.02.2019</span></div>
                                    <div className="countCard__price"><span>12 000 ₽</span></div>
                                </div>
                                <div className="countCard__bottom">
                                    <table>
                                        <tr>
                                            <td className="countCard__bold">Организация</td>
                                            <td className="countCard__gray">ООО “Бизнес Сеть”</td>
                                        </tr>
                                        <tr>
                                            <td className="countCard__bold">Клиент</td>
                                            <td className="countCard__gray">ООО “Рога и копыта”</td>
                                        </tr>
                                    </table>
                                    <table>
                                        <tr>
                                            <td className="countCard__bold">
                                                Дата оплаты
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="countCard__gray">
                                            10.11.2016
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </Container>
                        </Container>
                    </div>
                    <div className="wrapper wrapper_comp_count">
                    <div className="count__title count_color_yellow">
                        <span>ОПЛАЧЕН (2)</span>
                    </div>
                    <div className="count__price">
                        <span>10 500 ₽</span>
                    </div>
                    <div className="count__plus">
                        <span>+</span>
                    </div>
                    <Container type="container" comp="compCard">
                        <Container comp="compCard" type="wrapper">
                            <div className="countCard__options">
                                <div className="countCard__pen">
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                                <div className="countCard__trash">
                                    <i className="fas fa-trash-alt"></i>
                                </div>
                            </div>
                            <div className="countCard__top">
                                <div className="countCard__title"><span>Счет №1 от 02.02.2019</span></div>
                                <div className="countCard__price"><span>12 000 ₽</span></div>
                            </div>
                            <div className="countCard__bottom">
                                <table>
                                    <tr>
                                        <td className="countCard__bold">Организация</td>
                                        <td className="countCard__gray">ООО “Бизнес Сеть”</td>
                                    </tr>
                                    <tr>
                                        <td className="countCard__bold">Клиент</td>
                                        <td className="countCard__gray">ООО “Рога и копыта”</td>
                                    </tr>
                                </table>
                                <table>
                                    <tr>
                                        <td className="countCard__bold">
                                            Дата оплаты
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="countCard__gray">
                                        10.11.2016
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </Container>
                        <Container comp="compCard" type="wrapper">
                            <div className="countCard__options">
                                <div className="countCard__pen">
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                                <div className="countCard__trash">
                                    <i className="fas fa-trash-alt"></i>
                                </div>
                            </div>
                            <div className="countCard__top">
                                <div className="countCard__title"><span>Счет №1 от 02.02.2019</span></div>
                                <div className="countCard__price"><span>12 000 ₽</span></div>
                            </div>
                            <div className="countCard__bottom">
                                <table>
                                    <tr>
                                        <td className="countCard__bold">Организация</td>
                                        <td className="countCard__gray">ООО “Бизнес Сеть”</td>
                                    </tr>
                                    <tr>
                                        <td className="countCard__bold">Клиент</td>
                                        <td className="countCard__gray">ООО “Рога и копыта”</td>
                                    </tr>
                                </table>
                                <table>
                                    <tr>
                                        <td className="countCard__bold">
                                            Дата оплаты
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="countCard__gray">
                                        10.11.2016
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </Container>
                    </Container>
                </div>
                    <div className="wrapper wrapper_comp_count">
                        <div className="count__title count_color_green">
                            <span>НА ОПЛАТУ (2)</span>
                        </div>
                        <div className="count__price">
                            <span>10 500 ₽</span>
                        </div>
                        <div className="count__plus">
                            <span>+</span>
                        </div>
                        <Container type="container" comp="compCard">
                            <Container comp="compCard" type="wrapper">
                                <div className="countCard__options">
                                    <div className="countCard__pen">
                                        <i className="fas fa-pencil-alt"></i>
                                    </div>
                                    <div className="countCard__trash">
                                        <i className="fas fa-trash-alt"></i>
                                    </div>
                                </div>
                                <div className="countCard__top">
                                    <div className="countCard__title"><span>Счет №1 от 02.02.2019</span></div>
                                    <div className="countCard__price"><span>12 000 ₽</span></div>
                                </div>
                                <div className="countCard__bottom">
                                    <table>
                                        <tr>
                                            <td className="countCard__bold">Организация</td>
                                            <td className="countCard__gray">ООО “Бизнес Сеть”</td>
                                        </tr>
                                        <tr>
                                            <td className="countCard__bold">Клиент</td>
                                            <td className="countCard__gray">ООО “Рога и копыта”</td>
                                        </tr>
                                    </table>
                                    <table>
                                        <tr>
                                            <td className="countCard__bold">
                                                Дата оплаты
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="countCard__gray">
                                            10.11.2016
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </Container>
                            <Container comp="compCard" type="wrapper">
                                <div className="countCard__options">
                                    <div className="countCard__pen">
                                        <i className="fas fa-pencil-alt"></i>
                                    </div>
                                    <div className="countCard__trash">
                                        <i className="fas fa-trash-alt"></i>
                                    </div>
                                </div>
                                <div className="countCard__top">
                                    <div className="countCard__title"><span>Счет №1 от 02.02.2019</span></div>
                                    <div className="countCard__price"><span>12 000 ₽</span></div>
                                </div>
                                <div className="countCard__bottom">
                                    <table>
                                        <tr>
                                            <td className="countCard__bold">Организация</td>
                                            <td className="countCard__gray">ООО “Бизнес Сеть”</td>
                                        </tr>
                                        <tr>
                                            <td className="countCard__bold">Клиент</td>
                                            <td className="countCard__gray">ООО “Рога и копыта”</td>
                                        </tr>
                                    </table>
                                    <table>
                                        <tr>
                                            <td className="countCard__bold">
                                                Дата оплаты
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="countCard__gray">
                                            10.11.2016
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </Container>
                        </Container>
                    </div>
                
                </div>
                
            </Container>
        </>)
    }
}