import React from "react";
import { Container } from "../Container/Container";
import { Link } from "../Link/Link";
import { Img, ShapeType } from "../Img/Img";
import img from "../../assets/icons/logo-2.svg";
import "./CurrentPartner.css";
import { Button } from "../Button/Button";

export const CurrentPartner: React.FC = () => {
  return (
    <>
      <Container comp="compNav" type="container">
        <Container comp="compNav" type="wrapper">
          <ul>
            <li>
              <Link
                comp="compNav"
                color="blue"
                size="normal"
                href="/count/income"
                checked
              >
                <span>ОБЩИЕ</span>
              </Link>
            </li>
            <li>
              <Link
                comp="compNav"
                color="gray"
                size="normal"
                href="/count/outgoing"
              >
                <span>СЧЕТА</span>
              </Link>
            </li>
            <li>
              <Link
                comp="compNav"
                color="gray"
                size="normal"
                href="/count/outgoing"
              >
                <span>СДЕЛКИ</span>
              </Link>
            </li>
            <li>
              <Link
                comp="compNav"
                color="gray"
                size="normal"
                href="/count/outgoing"
              >
                <span>ЗАДАЧИ</span>
              </Link>
            </li>
            <li>
              <Link
                comp="compNav"
                color="gray"
                size="normal"
                href="/count/outgoing"
              >
                <span>СВЯЗИ</span>
              </Link>
            </li>
            <li>
              <Link
                comp="compNav"
                color="gray"
                size="normal"
                href="/count/outgoing"
              >
                <span>ИСТОРИЯ</span>
              </Link>
            </li>
            <li>
              <Link
                comp="compNav"
                color="gray"
                size="normal"
                href="/count/outgoing"
              >
                <span>АНАЛИТИКА</span>
              </Link>
            </li>
          </ul>
        </Container>
      </Container>
      <Container comp="compTitle" type="wrapper">
        <div className="compTitle__left">
          <h1>Рога и Копыта, ООО</h1>
        </div>
        <div className="compTitle__right">
          <Link
            href="/new-count/outgoing"
            comp="compTitle"
            color="blue"
            size="normal"
          ></Link>
        </div>
      </Container>

      <Container comp="CurrentPartner" type="container">
        <div
          className="wrapper wrapper_comp_card wrapper_comp_currentPartner"
          style={{
            width: "50%",
            boxSizing: "border-box",
            paddingBottom: "90px"
          }}
        >
          <div className="currentPartner__logo">
            <img src={img} alt="" style={{ width: "150px", height: "150px" }} />
          </div>
          <div className="wrapper wrapper_comp_currentPartnerInfo">
            <div className="currentPartnerInfo__title">
              <span>Реквизиты</span>
            </div>
            <div className="wrapper wrapper_comp_currentPartnerPart">
              <div className="currentPartnerPart__title">
                <span>Организация</span>
              </div>
              <div className="currentPartnerPart__text">
                <span>
                  ИНН: 7000003800, Сокращенное наименование организации: ООО
                  “РОГА И КОПЫТА”, Полное наименование организации: ОБЩЕСТВО С
                  ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ “РОГА И КОПЫТА ”, ОГРН:
                  1047700000037, КПП: 770000001, Дата государственной
                  регистрации: 16.07.2014, Ген. директор: Васильев Виктор
                  Иванович
                </span>
              </div>
              <div className="wrapper wrapper_comp_currentPartnerPart">
                <div className="currentPartnerPart__title">
                  <span>Юридический адрес</span>
                </div>
                <div className="currentPartnerPart__text">
                  <span>
                    127035, г. Москва, ул. Новый Арбат 1, оф. 3, стр. 2
                  </span>
                </div>
              </div>
              <div className="wrapper wrapper_comp_currentPartnerPart">
                <div className="currentPartnerPart__title">
                  <span>Фактический адрес</span>
                </div>
                <div className="currentPartnerPart__text">
                  <span>
                    127035, г. Москва, ул. Новый Арбат 1, оф. 3, стр. 2
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="wrapper wrapper_comp_card wrapper_comp_currentPartner"
          style={{
            width: "45%",
            boxSizing: "border-box",
            flexDirection: "column",
            paddingLeft: "50px",
            paddingRight: "50px"
          }}
        >
          <div className="wrapper wrapper_comp_currentPartnerInfo">
            <div className="currentPartnerInfo__title">
              <span>Контакты, связанные с партнером</span>
            </div>
          </div>
          <div className="container_comp_currentPartnerContact">
            <div className="wrapper wrapper_comp_currentPartnerContact">
              <div className="currentPartnerContact__name">
                <span>Васильев Виктор</span>
              </div>
              <div className="currentPartnerContact__pos">
                <span>Генеральный директор</span>
              </div>
              <div className="currentPartnerContact__phone">
                <span>8 (916) 916-16-16, gen@site.com</span>
                <div className="currentPartnerContact__icons">
                  <i className="fas fa-phone-alt"></i>
                  <i className="fas fa-envelope"></i>
                  <i className="fas fa-comments"></i>
                </div>
              </div>
            </div>
            <div className="wrapper wrapper_comp_currentPartnerContact">
              <div className="currentPartnerContact__name">
                <span>Васильев Виктор</span>
              </div>
              <div className="currentPartnerContact__pos">
                <span>Генеральный директор</span>
              </div>
              <div className="currentPartnerContact__phone">
                <span>8 (916) 916-16-16, gen@site.com</span>
                <div className="currentPartnerContact__icons">
                  <i className="fas fa-phone-alt"></i>
                  <i className="fas fa-envelope"></i>
                  <i className="fas fa-comments"></i>
                </div>
              </div>
            </div>
            <div className="wrapper wrapper_comp_currentPartnerContact">
              <div className="currentPartnerContact__name">
                <span>Васильев Виктор</span>
              </div>
              <div className="currentPartnerContact__pos">
                <span>Генеральный директор</span>
              </div>
              <div className="currentPartnerContact__phone">
                <span>8 (916) 916-16-16, gen@site.com</span>
                <div className="currentPartnerContact__icons">
                  <i className="fas fa-phone-alt"></i>
                  <i className="fas fa-envelope"></i>
                  <i className="fas fa-comments"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="wrapper wrapper_comp_card wrapper_comp_currentPartner"
          style={{ width: "100%" }}
        >
          <div
            className="wrapper wrapper_comp_currentPartnerContactInfo"
            style={{ width: "40%" }}
          >
            <div className="currentPartnerInfo__title">
              <span>Контактная информация</span>
            </div>
            <table className="table table_comp_currentPartnerContactInfo">
              <tbody>
                <tr>
                  <th>
                    <span>Телефоны</span>
                  </th>
                  <th>
                    <span>8 (916) 916-16-16, 8 (499) 544-54-54</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span>E-mail</span>
                  </th>
                  <th>
                    <span>info@site.com</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span>Сайт</span>
                  </th>
                  <th>
                    <span>https://www.site.com</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span>Ответственный</span>
                  </th>
                  <th className="task-stat__user-info">
                    <div className="task-stat__user-img">
                      <Img
                        src={ShapeType.user_photo}
                        comp="user-img"
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="task-stat__user-descr">
                      <p>Иванов Иван</p>
                      <p>Руководитель отдела БО</p>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
            <Button comp="currentPartnerContactInfo" color="gray" size="normal">
              ОТМЕНА
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};
