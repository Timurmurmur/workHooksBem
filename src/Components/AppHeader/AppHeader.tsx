import React, {useState} from 'react';
import { Container } from '../Container/Container';
import { Img, ShapeType } from '../Img/Img';
import { Link } from '../Link/Link';
import './AppHeader.css';

export const AppHeader: React.FC = ({children}) => {
    const [time, setTime] = useState();
    const [monthDay,setMonthDay] = useState();
    const [weekDay, setWeekDay] = useState();
    const [month, setMonth] = useState();
    
    setInterval(() => {
        var now = new Date();
        setTime(now.toLocaleTimeString());
        setMonthDay(now.getDate());
        chooseWeekDay(now.getDay(),now.getMonth());
    }, 1000)
    
    const chooseWeekDay = (day:number,month:number) => {
        
        let weekdayArray = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
        ]
        let monthArray = [
                   'Января',
                   'Февраля',
                   'Марта',
                   'Апреля',
                   'Мая',
                   'Июня',
                   'Июля',
                   'Августа',
                   'Сентября',
                   'Ноября',
                   'Декабря',
        ]
        setWeekDay(weekdayArray[day]);
        setMonth(monthArray[month - 1]);

    }

    return(
        <>
            <Container type="wrapper" comp="AppHeader">
                <div className="AppHeader_pos_left">
                    <Container type="wrapper" comp="userBlock">
                        <Container type="wrapper" comp="userPhoto">
                            <Img src={ShapeType.user_photo} comp="userPhoto" size="big" alt=""/>
                        </Container>
                        <div className="userBlock_info">
                            <p>username</p>
                        </div>
                        <div className="userBlock_post">
                            <span>Название должности</span>
                            <Img src={ShapeType.user_post} comp="userBlock" size="small" alt=""/>
                        </div>
                    </Container>
                    <Container type="wrapper" comp="AppHeaderNavLeft">
                        <Link href="/" comp="AppHeaderNav" color="white" size="small">
                            <Img src={ShapeType.desktop_icon} alt="" comp="AppHeaderNav" size="small"/>
                            <span>Рабочий стол</span>
                        </Link>
                        <Link href="/count/income" comp="AppHeaderNav" color="white" size="small">
                            <Img src={ShapeType.price_icon} alt="" comp="AppHeaderNav" size="small"/>
                            <span>Счета</span>
                        </Link>
                        <Link href="" comp="AppHeaderNav" color="white" size="small">
                            <Img src={ShapeType.header_task} alt="" comp="AppHeaderNav" size="small"/>
                            <span>Задачи</span>
                        </Link>
                        <Link href="" comp="AppHeaderNav" color="white" size="small">
                            <Img src={ShapeType.header_message} alt="" comp="AppHeaderNav" size="small"/>
                            <span>Сообщения</span>
                        </Link>
                        <Link href="" comp="AppHeaderNav" color="white" size="small">
                            <Img src={ShapeType.header_mail} alt="" comp="AppHeaderNav" size="small"/>
                            <span>Почта</span>
                        </Link>
                        <Link href="" comp="AppHeaderNav" color="white" size="small">
                            <Img src={ShapeType.header_partners} alt="" comp="AppHeaderNav" size="small"/>
                            <span>Партнеры</span>
                        </Link>
                        <Link href="" comp="AppHeaderNav" color="white" size="small">
                            <Img src={ShapeType.header_analyst} alt="" comp="AppHeaderNav" size="small"/>
                            <span>Аналитика</span>
                        </Link>
                    </Container>
                </div>
                <div className="wrappper wrapper_comp_InnerHeader">
                    <div className="AppHeader_pos_top">
                        <Container comp="AppHeaderTop" type="container">
                            <Container comp="timer" type="wrapper">
                                <div className="timer__time">
                                        <span>{
                                            time
                                        }</span>
                                    </div>
                                    <div className="timer__other">
                                        <span className="timer__weekday">{weekDay}</span>
                                        <span className="timer__monthday">{monthDay} {month}</span>
                                    </div>
                            </Container>
                            <Container comp="AppHeaderNavTop" type="wrapper">
                                <Link href="" comp="AppHeaderNavTop" color="black" size="small" count countBg="green">
                                    <span>3</span>
                                    <Img src={ShapeType.header_mail} alt="" comp="AppHeaderNav" size="small"/>
                                </Link>
                                <Link href="" comp="AppHeaderNavTop" color="black" size="small" count countBg="green">
                                    <span>3</span>
                                    <Img src={ShapeType.header_message} alt="" comp="AppHeaderNav" size="small"/>
                                </Link>
                                <Link href="" comp="AppHeaderNavTop" color="black" size="small" count countBg="gray">
                                    <span>3</span>
                                    <Img src={ShapeType.top_panel_noftication} alt="" comp="AppHeaderNav" size="small"/>
                                </Link>
                                <Link href="" comp="AppHeaderNavTop" color="black" size="small" >
                                    <Img src={ShapeType.top_panel_search} alt="" comp="AppHeaderNav" size="small"/>
                                </Link>
                                <Link href="/auth/login" comp="AppHeaderNavTop" color="black" size="small" >
                                    <Img src={ShapeType.top_panel_logout} alt="" comp="AppHeaderNav" size="small"/>
                                </Link>
                            </Container>
                        </Container>
                    </div>
                    <div className="wrapper wrapper_comp_content">
                        { children }
                    </div>
                </div>
                <div className="AppHeader_pos_right">
                    <Link comp="AppHeaderRight" href="#" size="small">
                        <Img src={ShapeType.top_panel_right} comp="AppHeaderNav" alt="" size="small"/>
                    </Link>
                </div>
            </Container>
            <div className="AppHeader_pos_bottom">
                <span>© 2019 BNet Group. Все права защищены.</span>
            </div>
        </>
    );
}