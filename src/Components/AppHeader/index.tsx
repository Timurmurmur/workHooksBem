import React, {useState} from 'react';
import './style/style.css';
import { Container } from '../../blocks/Container/Container';
import user_photo from '../../assets/images/user-photo.png';
import user_post from '../../assets/icons/user-post.png'
import desktop_icon from '../../assets/icons/header-desktop.png';
import price_icon from '../../assets/icons/header-price.png';
import header_task from '../../assets/icons/header-task.png';
import header_message from '../../assets/icons/header-message.png';
import header_mail from '../../assets/icons/header-mail.png';
import header_analyst from '../../assets/icons/header-analystic.png';
import header_partners from '../../assets/icons/header-partners.png';
import top_panel_right from '../../assets/icons/top-panel-right.png';
import top_panel_noftication from '../../assets/icons/top-panel-noftication.png';
import top_panel_logout from '../../assets/icons/top-panel-logout.png';
import top_panel_search from '../../assets/icons/top-panel-search.png';


import { Img } from '../../blocks/Img';
import { Link } from '../../blocks/Link/Link';

export const AppHeader: React.FC = (props:any) => {
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
                            <Img src={user_photo} comp="userPhoto" alt="" size="big"/>
                        </Container>
                        <div className="userBlock_info">
                            <p>username</p>
                        </div>
                        <div className="userBlock_post">
                            <span>Название должности</span>
                            <Img comp="userBlock" size="small" src={user_post} alt=""/>
                        </div>
                    </Container>
                    <Container type="wrapper" comp="AppHeaderNavLeft">
                        <Link href="/" comp="AppHeaderNav" color="white" size="small">
                            <Img src={desktop_icon} alt="" comp="AppHeaderNav" size="small"/>
                            <span>Рабочий стол</span>
                        </Link>
                        <Link href="/count/income" comp="AppHeaderNav" color="white" size="small">
                            <Img src={price_icon} alt="" comp="AppHeaderNav" size="small"/>
                            <span>Счета</span>
                        </Link>
                        <Link href="" comp="AppHeaderNav" color="white" size="small">
                            <Img src={header_task} alt="" comp="AppHeaderNav" size="small"/>
                            <span>Задачи</span>
                        </Link>
                        <Link href="" comp="AppHeaderNav" color="white" size="small">
                            <Img src={header_message} alt="" comp="AppHeaderNav" size="small"/>
                            <span>Сообщения</span>
                        </Link>
                        <Link href="" comp="AppHeaderNav" color="white" size="small">
                            <Img src={header_mail} alt="" comp="AppHeaderNav" size="small"/>
                            <span>Почта</span>
                        </Link>
                        <Link href="" comp="AppHeaderNav" color="white" size="small">
                            <Img src={header_partners} alt="" comp="AppHeaderNav" size="small"/>
                            <span>Партнеры</span>
                        </Link>
                        <Link href="" comp="AppHeaderNav" color="white" size="small">
                            <Img src={header_analyst} alt="" comp="AppHeaderNav" size="small"/>
                            <span>Аналитика</span>
                        </Link>
                    </Container>
                </div>
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
                                <Img src={header_mail} alt="" comp="AppHeaderNav" size="small"/>
                            </Link>
                            <Link href="" comp="AppHeaderNavTop" color="black" size="small" count countBg="green">
                                <span>3</span>
                                <Img src={header_message} alt="" comp="AppHeaderNav" size="small"/>
                            </Link>
                            <Link href="" comp="AppHeaderNavTop" color="black" size="small" count countBg="gray">
                                <span>3</span>
                                <Img src={top_panel_noftication} alt="" comp="AppHeaderNav" size="small"/>
                            </Link>
                            <Link href="" comp="AppHeaderNavTop" color="black" size="small" >
                                <Img src={top_panel_search} alt="" comp="AppHeaderNav" size="small"/>
                            </Link>
                            <Link href="" comp="AppHeaderNavTop" color="black" size="small" >
                                <Img src={top_panel_logout} alt="" comp="AppHeaderNav" size="small"/>
                            </Link>
                        </Container>
                    </Container>
                </div>
                <div className="AppHeader_pos_right">
                    <Link comp="AppHeaderRight" href="#" size="small">
                        <Img src={top_panel_right} comp="AppHeaderNav" alt="" size="small"/>
                    </Link>
                </div>
                <div className="AppHeader_pos_bottom">
                    <span>© 2019 BNet Group. Все права защищены.</span>
                </div>
            </Container>
        </>
    );
}