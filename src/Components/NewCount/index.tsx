import React from 'react';
import { Container } from '../../blocks/Container/Container';
import { Link } from '../../blocks/Link/Link';
import { Input } from '../../blocks/Input/Input';
import { Select } from '../../blocks/Select/MySelect';
import './style/style.css';
import { Button } from '../../blocks/Button/Button';


export class NewCount extends React.Component<any,any>{
    componentDidMount(){
        console.log(this.props)
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
                                <h1>Новый cчет входящий</h1>
                                <span>Зарегистрируйте новый счет от поставщика, чтобы контролировать его оплату и Ваши финансовые потоки</span>
                            </>
                            :
                            <>
                                <h1>Новый cчет исходящий</h1>
                                <span>Создайте новый счет на оплату от покупателя, чтобы контролировать его оплату и Ваши финансовые потоки</span>
                            </>
                        }
                    </div>
                </Container>
                <div className="wrapper wrapper_comp_card container_comp_newCount newCount_count_first wrapper wrapper_comp_newCountTable">
                    <table className="newCountTable newCountTable_count_first">
                        <tr className="newCount__input">
                            <th>
                                <span>Номер счета</span>
                            </th>
                            <th>
                                <Input comp="newCount" size="normal" type="text" placeholder="№ счета"/>
                            </th>
                        </tr>
                        <tr className="newCount__input">
                            <th>
                                <span>Дата</span>
                            </th>
                            <th>
                                <Input comp="newCount" size="normal" type="text" placeholder="дд/мм/гггг"/>
                            </th>
                        </tr>
                        <tr className="newCount__input">
                            <th>
                                <span>Срок оплаты</span>
                            </th>
                            <th>
                                <Input comp="newCount" size="normal" type="text" placeholder="дд/мм/гггг"/>
                            </th>
                        </tr>
                        <tr className="newCount__input" >
                            <th>
                                <span>Организация</span>
                            </th>
                            <th>
                                <Select comp="newCount" options={['Введите наименование организации']}/>
                            </th>
                        </tr>
                        <tr className="newCount__input">
                            <th>
                                <span>Поставщик</span>
                            </th>
                            <th>
                                <Select comp="newCount" options={['Введите наименование поставщика']}/>
                            </th>
                        </tr>
                        <tr className="newCount__input">
                            <th>
                                <span>Валюта</span>
                            </th>
                            <th>
                                <Select comp="newCount" options={['Рубль']}/>
                            </th>
                        </tr>
                    </table>
                </div>
                <div className="wrapper wrapper_comp_card container_comp_newCount newCount_count_second">
                    <div className="wrapper wrapper_comp_newCountBtnLine">
                        <Button comp="newCountBtbLine" size="normal" color="gray">
                            <span>НОВАЯ СТРОКА</span>
                        </Button>
                        <Button comp="newCountBtbLine" size="normal" color="blue">
                            <span>НОВАЯ СТРОКА</span>
                        </Button>
                    </div>
                    <div className="wrapper wrapper_comp_newCountTable container_comp_newCountTable">
                        <table className="newCountTable newCountTable_count_second">
                            <tr>
                                <th><span>#</span></th>
                                <th><span>Товар/услуга</span></th>
                                <th><span>Содержание</span></th>
                                <th><span>Ед. изм.</span></th>
                                <th><span>Цена</span></th>
                                <th><span>Кол-во</span></th>
                                <th><span>Сумма</span></th>
                                <th><span>НДС</span></th>
                                <th><span>Сумма НДС</span></th>
                            </tr>
                            <tr>
                                <th>
                                    <span>1</span>
                                </th>
                                <th>
                                    <Select comp="newCount" options={['Выберите товар']}/>
                                </th>
                                <th className="newCount_type_max">
                                    <Input comp="newCount" size="normal" type="text" placeholder="Введите описание услуги"/>
                                </th>
                                <th>
                                    <Select comp="newCount" options={['Выберите ед. изм.']}/>
                                </th>
                                <th className="newCount_type_min">
                                    <Input comp="newCount" size="normal" type="text" placeholder="Цена"/>
                                </th>
                                <th className="newCount_type_min">
                                    <Input comp="newCount" size="normal" type="text" placeholder="Кол-во"/>
                                </th>
                                <th className="newCount_type_min">
                                    <Input comp="newCount" size="normal" type="text" placeholder="Сумма"/>
                                </th>
                                <th>
                                    <Select comp="newCount" options={['НДС']}/>
                                </th>
                                <th className="newCount_type_middle">
                                    <Input comp="newCount" size="normal" type="text" placeholder="Сумма НДС"/>
                                </th>
                                <th>
                                    <div className="newCountTable__options">
                                        <div className="newCountTable__pen">
                                            <i className="fas fa-pencil-alt" aria-hidden="true"></i>
                                        </div>
                                        <div className="newCountTable__trash">
                                            <i className="fas fa-trash-alt" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </table>
                        <div className="wrapper wrapper_comp_newCountTableValues">
                            <div className="newCountTableValues__line">
                                <span>Общая сумма</span>
                                <span>0 ₽</span>
                            </div>
                            <div className="newCountTableValues__line">
                                <span>Сумма НДС</span>
                                <span>0 ₽</span>
                            </div>
                            <div className="newCountTableValues__line">
                                <span>Сумма без НДС</span>
                                <span>0 ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper wrapper_comp_card container_conp_newCount newCount_count_third">
                    <div className="wrapper wrapper_comp_comment">
                        <span>Комментарий</span>
                        <textarea cols={30} rows={7} placeholder="Введите комментарий к счету">
                        </textarea>
                    </div>
                    <div className="wrapper wrapper_comp_newCountBtnLine">
                        <Button comp="newCountBtnLine" color="blue" size="normal"><span>СОХРАНИТЬ</span></Button>
                        <Button comp="newCountBtnLine" color="blue" size="normal"><span>СОХРАНИТЬ И ОТПРАВИТЬ</span></Button>
                        <Button comp="newCountBtnLine" color="gray" size="normal"><span>ОТМЕНА</span></Button>
                        <div className="newCountBtnLine__responsible">
                            <span>Ответственный</span>
                            <Select comp="newCount" options={['Ответственный']}/>
                            <span>Автор Иванов И.И.</span>
                        </div>
                    </div>
                </div>
            </Container>
        </>)
    }
}