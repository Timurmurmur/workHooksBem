import React from 'react';
import { Container } from '../Container/Container';
import './Main.css';

import { Img, ShapeType } from '../Img/Img';
import { Link } from '../Link/Link';

interface IState {}

export interface MainProps {
  message: string;
  message2: string;
  route: string;

  click: () => void;
}

export class Main extends React.Component<MainProps, IState> {
  public render() {
    const { click, message, message2, route } = this.props;
    console.log(message, message2, route);

    return (
      <div onClick={click}>
        <Container comp="main" type="wrapper">
          <div className="wrapper wrapper_comp_card card_type_task">
            <div className="card_header">
              <div className="card_header__title">
                <span>Задачи</span>
              </div>
              <div className="card_header__options">
                <Img
                  comp=""
                  src={ShapeType.header_reload}
                  alt=""
                  width={24}
                  height={24}
                />
                <Img
                  comp=""
                  src={ShapeType.header_change}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <Container type="wrapper" comp="cardHeaderNav">
              <ul>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>НОВЫЕ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>НА ОЦЕНКЕ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="blue" size="normal" checked>
                    <span>НА ТЕСТИРОВАНИИ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>ВОЗРАЩЕНЫ НА ДОРАБОТКУ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>В ОЖИДАНИИ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>ОТКАЗ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>ИСПОЛНЕНЫ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>ЗАКРЫТЫ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>ВСЕ</span>
                  </Link>
                </li>
              </ul>
            </Container>
            <Container comp="cardContent" type="wrapper">
              <table className="table table_comp_cardContent">
                <tr className="table-colnaming">
                  <th className="table-colname">
                    <span>НАИМЕНОВАНИЕ ЗАДАЧИ</span>
                  </th>
                  <th className="table-colname">
                    <span>ДАТА НАЧАЛА</span>
                  </th>
                  <th className="table-colname">
                    <span>ДЭДЛАЙН</span>
                  </th>
                  <th className="table-colname">
                    <span>ПЛАН, Ч.</span>
                  </th>
                  <th className="table-colname">
                    <span>ФАКТ, Ч.</span>
                  </th>
                  <th className="table-colname">
                    <span>ПРОЕКТ/КЛИЕНТ</span>
                  </th>
                  <th className="table-colname">
                    <span>КОММЕНТАРИЙ</span>
                  </th>
                </tr>
                <tr className="table-colvalues">
                  <th>
                    <span className="table-name">
                      Название первой задачи, которую необходимо выполнить в
                      срок
                    </span>
                  </th>
                  <th>
                    <span className="table-start">
                      10.11.2016
                      <br />
                      14:11:00
                    </span>
                  </th>
                  <th>
                    <span className="table-deadline">
                      10.11.2016
                      <br />
                      14:11:00
                    </span>
                  </th>
                  <th>
                    <span className="table-planch">10</span>
                  </th>
                  <th>
                    <span className="table-facktch">10</span>
                  </th>
                  <th>
                    <span className="table-client">Клиент 1</span>
                  </th>
                  <th>
                    <span className="table-comment">
                      Последний комментарий к поставленной задаче
                    </span>
                  </th>
                </tr>
                <tr className="table-colvalues">
                  <th>
                    <span className="table-name">
                      Название первой задачи, которую необходимо выполнить в
                      срок
                    </span>
                  </th>
                  <th>
                    <span className="table-start">
                      10.11.2016
                      <br />
                      14:11:00
                    </span>
                  </th>
                  <th>
                    <span className="table-deadline">
                      10.11.2016
                      <br />
                      14:11:00
                    </span>
                  </th>
                  <th>
                    <span className="table-planch">10</span>
                  </th>
                  <th>
                    <span className="table-facktch">10</span>
                  </th>
                  <th>
                    <span className="table-client">Клиент 1</span>
                  </th>
                  <th>
                    <span className="table-comment">
                      Последний комментарий к поставленной задаче
                    </span>
                  </th>
                </tr>
                <tr className="table-colvalues">
                  <th>
                    <span className="table-name">
                      Название первой задачи, которую необходимо выполнить в
                      срок
                    </span>
                  </th>
                  <th>
                    <span className="table-start">
                      10.11.2016
                      <br />
                      14:11:00
                    </span>
                  </th>
                  <th>
                    <span className="table-deadline">
                      10.11.2016
                      <br />
                      14:11:00
                    </span>
                  </th>
                  <th>
                    <span className="table-planch">10</span>
                  </th>
                  <th>
                    <span className="table-facktch">10</span>
                  </th>
                  <th>
                    <span className="table-client">Клиент 1</span>
                  </th>
                  <th>
                    <span className="table-comment">
                      Последний комментарий к поставленной задаче
                    </span>
                  </th>
                </tr>
                <tr className="table-colvalues">
                  <th>
                    <span className="table-name">
                      Название первой задачи, которую необходимо выполнить в
                      срок
                    </span>
                  </th>
                  <th>
                    <span className="table-start">
                      10.11.2016
                      <br />
                      14:11:00
                    </span>
                  </th>
                  <th>
                    <span className="table-deadline">
                      10.11.2016
                      <br />
                      14:11:00
                    </span>
                  </th>
                  <th>
                    <span className="table-planch">10</span>
                  </th>
                  <th>
                    <span className="table-facktch">10</span>
                  </th>
                  <th>
                    <span className="table-client">Клиент 1</span>
                  </th>
                  <th>
                    <span className="table-comment">
                      Последний комментарий к поставленной задаче
                    </span>
                  </th>
                </tr>
                <tr className="table-colvalues">
                  <th>
                    <span className="table-name">
                      Название первой задачи, которую необходимо выполнить в
                      срок
                    </span>
                  </th>
                  <th>
                    <span className="table-start">
                      10.11.2016
                      <br />
                      14:11:00
                    </span>
                  </th>
                  <th>
                    <span className="table-deadline">
                      10.11.2016
                      <br />
                      14:11:00
                    </span>
                  </th>
                  <th>
                    <span className="table-planch">10</span>
                  </th>
                  <th>
                    <span className="table-facktch">10</span>
                  </th>
                  <th>
                    <span className="table-client">Клиент 1</span>
                  </th>
                  <th>
                    <span className="table-comment">
                      Последний комментарий к поставленной задаче
                    </span>
                  </th>
                </tr>
              </table>
            </Container>
          </div>
          <Container type="wrapper" comp="card">
            <div className="card_header">
              <div className="card_header__title">
                <span>Статистика</span>
              </div>
              <Container type="wrapper" comp="cardHeaderNav">
                <ul>
                  <li>
                    <Link
                      href="#"
                      comp="main"
                      color="blue"
                      size="normal"
                      checked
                    >
                      <span>День</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" comp="main" color="gray" size="normal">
                      <span>Неделя</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" comp="main" color="gray" size="normal">
                      <span>Месяц</span>
                    </Link>
                  </li>
                </ul>
              </Container>
              <div className="card_header__options">
                <Img
                  comp=""
                  src={ShapeType.header_reload}
                  alt=""
                  width={24}
                  height={24}
                />
                <Img
                  comp=""
                  src={ShapeType.header_change}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <Container comp="stat" type="container">
              <div className="wrapper wrapper_comp_stat stat_type_income">
                <div className="stat__info">
                  <span className="stat__title">ДОХОД</span>
                  <span className="stat__persent">+ 3%</span>
                  <p>175 000 ₽</p>
                </div>
                <div className="stat_yesterday">
                  <span className="stat_yesterday__title">За вчера</span>
                  <p>168 000 ₽</p>
                </div>
              </div>
              <div className="wrapper wrapper_comp_stat stat_type_expense">
                <div className="stat__info">
                  <span className="stat__title">РАСХОД </span>
                  <span className="stat__persent">- 0.5%</span>
                  <p>105 000 ₽</p>
                </div>
                <div className="stat_yesterday">
                  <span className="stat_yesterday__title">За вчера</span>
                  <p>98 000 ₽</p>
                </div>
              </div>
              <div className="wrapper wrapper_comp_stat stat_type_profit">
                <div className="stat__info">
                  <span className="stat__title">ПРИБЫЛЬ </span>
                  <p>$ 75 000</p>
                </div>
                <div className="stat_yesterday">
                  <span className="stat_yesterday__title">
                    За прошлый день:
                  </span>
                  <p>$ 50 000</p>
                </div>
              </div>
              <div className="wrapper wrapper_comp_stat stat_type_visitors">
                <div className="stat__info">
                  <span className="stat__title">ПОСЕТИТЕЛИ </span>
                  <p>15 213</p>
                </div>
                <div className="stat_yesterday">
                  <span className="stat_yesterday__title">
                    За прошлый день:
                  </span>
                  <p>16 802</p>
                </div>
              </div>
              <div className="wrapper wrapper_comp_stat stat_type_deal">
                <table>
                  <tr>
                    <th className="stat__title">СДЕЛОК</th>
                    <th className="statTime statVal_color_black">Сегодня</th>
                    <th className="statTime statVal_color_gray">Вчера</th>
                  </tr>
                  <tr>
                    <th className="stat__col">ОТКРЫТО</th>
                    <th className="statVal statVal_color_black">15 213</th>
                    <th className="statVal statVal_color_gray">12 231</th>
                  </tr>
                  <tr>
                    <th className="stat__col">ЗАКРЫТО</th>
                    <th className="statVal statVal_color_black">15 193</th>
                    <th className="statVal statVal_color_gray">11 231</th>
                  </tr>
                </table>
              </div>
            </Container>
          </Container>
          <div className="wrapper wrapper_comp_card card_type_count">
            <div className="card_header">
              <div className="card_header__title">
                <span>Счета исходящие</span>
              </div>
              <div className="card_header__options">
                <Img
                  comp=""
                  src={ShapeType.header_reload}
                  alt=""
                  width={24}
                  height={24}
                />
                <Img
                  comp=""
                  src={ShapeType.header_change}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <Container type="wrapper" comp="cardHeaderNav">
              <ul>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>НОВЫЕ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>ОПЛАЧЕННЫЕ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="blue" size="normal" checked>
                    <span>НЕОПЛАЧЕННЫЕ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>ПРОСРОЧЕННЫЕ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>ВСЕ</span>
                  </Link>
                </li>
              </ul>
            </Container>
            <Container type="container" comp="countCard">
              <Container comp="countCard" type="wrapper">
                <div className="countCard__top">
                  <div className="countCard__title">
                    <span>Счет №1 от 02.02.2019</span>
                  </div>
                  <div className="countCard__price">
                    <span>12 000 ₽</span>
                  </div>
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
                      <td className="countCard__bold">Дата оплаты</td>
                    </tr>
                    <tr>
                      <td className="countCard__gray">10.11.2016</td>
                    </tr>
                  </table>
                </div>
              </Container>
              <Container comp="countCard" type="wrapper">
                <div className="countCard__top">
                  <div className="countCard__title">
                    <span>Счет №1 от 02.02.2019</span>
                  </div>
                  <div className="countCard__price">
                    <span>12 000 ₽</span>
                  </div>
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
                      <td className="countCard__bold">Дата оплаты</td>
                    </tr>
                    <tr>
                      <td className="countCard__gray">10.11.2016</td>
                    </tr>
                  </table>
                </div>
              </Container>
            </Container>
            <div className="card__other">
              <span>ЕЩЕ …</span>
            </div>
          </div>
          <div className="wrapper wrapper_comp_card card_type_count">
            <div className="card_header">
              <div className="card_header__title">
                <span>Счета входящие</span>
              </div>
              <div className="card_header__options">
                <Img
                  comp=""
                  src={ShapeType.header_reload}
                  alt=""
                  width={24}
                  height={24}
                />
                <Img
                  comp=""
                  src={ShapeType.header_change}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <Container type="wrapper" comp="cardHeaderNav">
              <ul>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>НОВЫЕ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>ОПЛАЧЕННЫЕ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="blue" size="normal" checked>
                    <span>НЕОПЛАЧЕННЫЕ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>ПРОСРОЧЕННЫЕ</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" comp="main" color="gray" size="normal">
                    <span>ВСЕ</span>
                  </Link>
                </li>
              </ul>
            </Container>
            <Container type="container" comp="countCard">
              <Container comp="countCard" type="wrapper">
                <div className="countCard__top">
                  <div className="countCard__title">
                    <span>Счет №1 от 02.02.2019</span>
                  </div>
                  <div className="countCard__price">
                    <span>12 000 ₽</span>
                  </div>
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
                      <td className="countCard__bold">Дата оплаты</td>
                    </tr>
                    <tr>
                      <td className="countCard__gray">10.11.2016</td>
                    </tr>
                  </table>
                </div>
              </Container>
              <Container comp="countCard" type="wrapper">
                <div className="countCard__top">
                  <div className="countCard__title">
                    <span>Счет №1 от 02.02.2019</span>
                  </div>
                  <div className="countCard__price">
                    <span>12 000 ₽</span>
                  </div>
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
                      <td className="countCard__bold">Дата оплаты</td>
                    </tr>
                    <tr>
                      <td className="countCard__gray">10.11.2016</td>
                    </tr>
                  </table>
                </div>
              </Container>
            </Container>
            <div className="card__other">
              <span>ЕЩЕ …</span>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
