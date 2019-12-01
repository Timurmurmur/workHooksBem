import React from 'react';
import { Container } from '../../blocks/Container/Container';
import { Link } from '../../blocks/Link/Link';
import { Input } from '../../blocks/Input/Input';
import user_photo from '../../assets/images/user-photo.png';
import './style/style.css';

export class Tasks extends React.Component<any,any>{

    render(){
        return(
        <>
        <Container comp="Tasks" type="Wrapper">
            <Container comp="compNav" type="container">
                <Container comp="compNav" type="wrapper">
                    <ul>
                            <li>
                                <Link comp="compNav" color="blue" size="normal" href="/count/income" checked>
                                    <span>В РАБОТЕ</span>
                                </Link>
                            </li>
                            <li>
                                <Link  comp="compNav" color="gray" size="normal" href="/count/outgoing">
                                    <span>ЗАВЕРШЕНЫ</span>
                                </Link>
                            </li>
                            <li>
                                <Link  comp="compNav" color="gray" size="normal" href="/count/outgoing">
                                    <span>ОТЛОЖЕНЫ</span>
                                </Link>
                            </li>
                            <li>
                                <Link  comp="compNav" color="gray" size="normal" href="/count/outgoing">
                                    <span>ПРОСРОЧЕНЫ</span>
                                </Link>
                            </li>
                            <li>
                                <Link  comp="compNav" color="gray" size="normal" href="/count/outgoing">
                                    <span>ПОЧТИ ПРОСРОЧЕНЫ</span>
                                </Link>
                            </li>
                    </ul>
                </Container>
            </Container>
            <Container comp="compTitle" type="wrapper">
                <div className="compTitle__left">
                    <h1>Задачи</h1>
                    <Input comp="compTitle" type="text" placeholder="Search…" size="normal"/>
                    <i className="fas fa-search"></i>
                </div>
                <div className="compTitle__right">
                    <Link href="#" comp="compTitle" color="blue" size="normal">
                    </Link>
                </div>
            </Container>
            <div className="wrapper wrapper_comp_card container_comp_tasks container_comp_count">
                <div className="wrapper wrapper_comp_count">
                    <div className="count__title count_color_blue">
                        <span>НОВЫЕ (1)</span>
                    </div>
                    <div className="count__plus task__plus">
                        <span>+</span>
                    </div>
                    <Container type="container" comp="taskCard">
                        <div className="wrapper wrapper_comp_countCard wrapper_comp_taskCard">
                            <div className="countCard__options">
                                <div className="countCard__pen">
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                                <div className="countCard__trash">
                                    <i className="fas fa-trash-alt"></i>
                                </div>
                            </div>
                            <div className="taskCard__current">
                                <div className="taskCard__title">
                                    <span>Название задачи</span>
                                </div>
                                <div className="taskCard__tag">
                                    <span>#Проект</span>
                                </div>
                                <div className="taskCard__dateType">
                                    <span className="taskCard__date">20 марта 2019</span>
                                    <span className="taskCard__type">Просрочена</span>
                                </div>
                                <div className="taskCard__options">
                                    <div className="taskCard__messages">
                                        <i className="fas fa-comments"></i> +1
                                    </div>
                                    <div className="taskCard__clip">
                                        <i className="fas fa-paperclip"></i> 2
                                    </div>
                                    <div className="taskCard__check">
                                        <i className="fas fa-check-square"></i> 2/3
                                    </div>
                                </div>
                                <div className="taskCard__footer">
                                    <div className="taskCard__users">
                                        <div className="taskCard__photo">
                                            <img src={user_photo} alt=""/>
                                        </div>
                                        <span>></span>
                                        <div className="taskCard__photo">
                                            <img src={user_photo} alt=""/>
                                        </div>
                                    </div>
                                    <div className="taskCard__right">
                                        <div className="taskCard__persent">0%</div>
                                        <div className="taskCard__time">00:00:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper wrapper_comp_countCard wrapper_comp_taskCard">
                            <div className="countCard__options">
                                <div className="countCard__pen">
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                                <div className="countCard__trash">
                                    <i className="fas fa-trash-alt"></i>
                                </div>
                            </div>
                            <div className="taskCard__current">
                                <div className="taskCard__title">
                                    <span>Название задачи</span>
                                </div>
                                <div className="taskCard__tag">
                                    <span>#Проект</span>
                                </div>
                                <div className="taskCard__dateType">
                                    <span className="taskCard__date">20 марта 2019</span>
                                    <span className="taskCard__type">Просрочена</span>
                                </div>
                                <div className="taskCard__options">
                                    <div className="taskCard__messages">
                                        <i className="fas fa-comments"></i> +1
                                    </div>
                                    <div className="taskCard__clip">
                                        <i className="fas fa-paperclip"></i> 2
                                    </div>
                                    <div className="taskCard__check">
                                        <i className="fas fa-check-square"></i> 2/3
                                    </div>
                                </div>
                                <div className="taskCard__footer">
                                    <div className="taskCard__users">
                                        <div className="taskCard__photo">
                                            <img src={user_photo} alt=""/>
                                        </div>
                                        <span>></span>
                                        <div className="taskCard__photo">
                                            <img src={user_photo} alt=""/>
                                        </div>
                                    </div>
                                    <div className="taskCard__right">
                                        <div className="taskCard__persent">0%</div>
                                        <div className="taskCard__time">00:00:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="wrapper wrapper_comp_count">
                    <div className="count__title count_color_yellow">
                        <span>ВЫПОЛНЯЮТСЯ (2)</span>
                    </div>
                    <div className="count__plus task__plus">
                        <span>+</span>
                    </div>
                    <Container type="container" comp="taskCard">
                        <div className="wrapper wrapper_comp_countCard wrapper_comp_taskCard">
                            <div className="countCard__options">
                                <div className="countCard__pen">
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                                <div className="countCard__trash">
                                    <i className="fas fa-trash-alt"></i>
                                </div>
                            </div>
                            <div className="taskCard__current">
                                <div className="taskCard__title">
                                    <span>Название задачи</span>
                                </div>
                                <div className="taskCard__tag">
                                    <span>#Проект</span>
                                </div>
                                <div className="taskCard__dateType">
                                    <span className="taskCard__date">20 марта 2019</span>
                                    <span className="taskCard__type">Просрочена</span>
                                </div>
                                <div className="taskCard__options">
                                    <div className="taskCard__messages">
                                        <i className="fas fa-comments"></i> +1
                                    </div>
                                    <div className="taskCard__clip">
                                        <i className="fas fa-paperclip"></i> 2
                                    </div>
                                    <div className="taskCard__check">
                                        <i className="fas fa-check-square"></i> 2/3
                                    </div>
                                </div>
                                <div className="taskCard__footer">
                                    <div className="taskCard__users">
                                        <div className="taskCard__photo">
                                            <img src={user_photo} alt=""/>
                                        </div>
                                        <span>></span>
                                        <div className="taskCard__photo">
                                            <img src={user_photo} alt=""/>
                                        </div>
                                    </div>
                                    <div className="taskCard__right">
                                        <div className="taskCard__persent">0%</div>
                                        <div className="taskCard__time">00:00:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper wrapper_comp_countCard wrapper_comp_taskCard">
                            <div className="countCard__options">
                                <div className="countCard__pen">
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                                <div className="countCard__trash">
                                    <i className="fas fa-trash-alt"></i>
                                </div>
                            </div>
                            <div className="taskCard__current">
                                <div className="taskCard__title">
                                    <span>Название задачи</span>
                                </div>
                                <div className="taskCard__tag">
                                    <span>#Проект</span>
                                </div>
                                <div className="taskCard__dateType">
                                    <span className="taskCard__date">20 марта 2019</span>
                                    <span className="taskCard__type">Просрочена</span>
                                </div>
                                <div className="taskCard__options">
                                    <div className="taskCard__messages">
                                        <i className="fas fa-comments"></i> +1
                                    </div>
                                    <div className="taskCard__clip">
                                        <i className="fas fa-paperclip"></i> 2
                                    </div>
                                    <div className="taskCard__check">
                                        <i className="fas fa-check-square"></i> 2/3
                                    </div>
                                </div>
                                <div className="taskCard__footer">
                                    <div className="taskCard__users">
                                        <div className="taskCard__photo">
                                            <img src={user_photo} alt=""/>
                                        </div>
                                        <span>></span>
                                        <div className="taskCard__photo">
                                            <img src={user_photo} alt=""/>
                                        </div>
                                    </div>
                                    <div className="taskCard__right">
                                        <div className="taskCard__persent">0%</div>
                                        <div className="taskCard__time">00:00:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="wrapper wrapper_comp_count">
                    <div className="count__title count_color_green">
                        <span>ВЫПОЛНЕНЫ (2)</span>
                    </div>
                    <div className="count__plus task__plus">
                        <span>+</span>
                    </div>
                    <Container type="container" comp="taskCard">
                        <div className="wrapper wrapper_comp_countCard wrapper_comp_taskCard">
                            <div className="countCard__options">
                                <div className="countCard__pen">
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                                <div className="countCard__trash">
                                    <i className="fas fa-trash-alt"></i>
                                </div>
                            </div>
                            <div className="taskCard__current">
                                <div className="taskCard__title">
                                    <span>Название задачи</span>
                                </div>
                                <div className="taskCard__tag">
                                    <span>#Проект</span>
                                </div>
                                <div className="taskCard__dateType">
                                    <span className="taskCard__date">20 марта 2019</span>
                                    <span className="taskCard__type">Просрочена</span>
                                </div>
                                <div className="taskCard__options">
                                    <div className="taskCard__messages">
                                        <i className="fas fa-comments"></i> +1
                                    </div>
                                    <div className="taskCard__clip">
                                        <i className="fas fa-paperclip"></i> 2
                                    </div>
                                    <div className="taskCard__check">
                                        <i className="fas fa-check-square"></i> 2/3
                                    </div>
                                </div>
                                <div className="taskCard__footer">
                                    <div className="taskCard__users">
                                        <div className="taskCard__photo">
                                            <img src={user_photo} alt=""/>
                                        </div>
                                        <span>></span>
                                        <div className="taskCard__photo">
                                            <img src={user_photo} alt=""/>
                                        </div>
                                    </div>
                                    <div className="taskCard__right">
                                        <div className="taskCard__persent">0%</div>
                                        <div className="taskCard__time">00:00:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper wrapper_comp_countCard wrapper_comp_taskCard">
                            <div className="countCard__options">
                                <div className="countCard__pen">
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                                <div className="countCard__trash">
                                    <i className="fas fa-trash-alt"></i>
                                </div>
                            </div>
                            <div className="taskCard__current">
                                <div className="taskCard__title">
                                    <span>Название задачи</span>
                                </div>
                                <div className="taskCard__tag">
                                    <span>#Проект</span>
                                </div>
                                <div className="taskCard__dateType">
                                    <span className="taskCard__date">20 марта 2019</span>
                                    <span className="taskCard__type">Просрочена</span>
                                </div>
                                <div className="taskCard__options">
                                    <div className="taskCard__messages">
                                        <i className="fas fa-comments"></i> +1
                                    </div>
                                    <div className="taskCard__clip">
                                        <i className="fas fa-paperclip"></i> 2
                                    </div>
                                    <div className="taskCard__check">
                                        <i className="fas fa-check-square"></i> 2/3
                                    </div>
                                </div>
                                <div className="taskCard__footer">
                                    <div className="taskCard__users">
                                        <div className="taskCard__photo">
                                            <img src={user_photo} alt=""/>
                                        </div>
                                        <span>></span>
                                        <div className="taskCard__photo">
                                            <img src={user_photo} alt=""/>
                                        </div>
                                    </div>
                                    <div className="taskCard__right">
                                        <div className="taskCard__persent">0%</div>
                                        <div className="taskCard__time">00:00:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </Container>
        </>
        );
    }
}