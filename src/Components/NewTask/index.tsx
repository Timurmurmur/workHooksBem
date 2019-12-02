import React from 'react';
import { Container } from '../Container/Container';
import { Link } from '../Link/Link';
import { Input } from '../Input/Input';
import './style/style.css';
import { Button } from '../Button/Button';
import { Select } from '../Select/MySelect';

export class NewTask extends React.Component<any,any>{


    render(){
        return(
            <>
            <Container type="container" comp="NewTask">
                <Container comp="compNav" type="container">
                        <Container comp="compNav" type="wrapper">
                            <ul>
                                <li>
                                    <Link comp="compNav" color="gray" size="normal" href="/count/income">
                                        <span>ПРОЕКТНАЯ ЗАДАЧА</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link comp="compNav" color="blue" size="normal" href="/count/outgoing" checked>
                                        <span>ЗАДАЧА</span>
                                    </Link>
                                </li>
                            </ul>
                        </Container>
                    </Container>
                <Container comp="compTitle" type="wrapper">
                    <div className="compTitle__left">
                        <h1>Новая задача</h1>
                        <span>Создайте новую задачу</span>
                    </div>
                </Container>
                <div className="wrapper wrapper_comp_card ">
                    <div className="wrapper wrapper_comp_newTask">
                        <div className="newTask__top">
                            <Input comp="newTask" size="big" type="text" placeholder="Введите название задачи"/>
                            <div className="checkbox checkbox_comp_newTask">
                                <input type="checkbox" id="index"/>
                                <label htmlFor="index">это важная задача</label>
                            </div>
                        </div>
                        <textarea placeholder="Введите описание задачи"></textarea>
                        <div className="newTask__icons">
                            <Input comp="newTask" size="big" type="text" placeholder="Чек-лист"/>
                            <label htmlFor="input__icons"></label>
                        </div>
                    </div>
                </div>
                <div className="wrapper wrapper_comp_card">
                    <div className="wrapper wrapper_comp_newTask">
                        <table className="table_comp_newTask">
                            <tr className="newTask__current">
                                <td><span>Автор</span></td>
                                <td><span>Иванов И.И.</span></td>
                            </tr>
                            <tr className="newTask__current">
                                <td><span>Ответственный</span></td>
                                <th>
                                    <Select comp="newTask" options={['Введите ответственного']}></Select>
                                </th>
                            </tr>
                            <tr className="newTask__current">
                                <td><span>Крайний срок</span></td>
                                <th><Input size="normal" comp="newTask" type="text" placeholder="дд/мм/гггг"/></th>
                            </tr>
                        </table>
                        <div className="newTask__footer">
                            <Button size="normal" comp="newTask" color="blue"><span>СОХРАНИТЬ</span></Button>
                            <Button size="normal" comp="newTask" color="gray"><span>ОТМЕНА</span></Button>
                        </div>
                    </div>
                </div>
            </Container>
                
            </>
        );
    }
}