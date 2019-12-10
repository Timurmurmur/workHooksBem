import React from "react";
import { Container } from "../Container/Container";
import { Link } from "../Link/Link";
import { Input } from "../Input/Input";
import logo from "../../assets/icons/logo-2.svg";

export const Organization: React.FC = () => {
  return (
    <>
      <Container comp="compTitle" type="wrapper">
        <div className="compTitle__left">
          <h1>Наши организации</h1>
          <Input
            comp="compTitle"
            type="text"
            placeholder="Search…"
            size="normal"
          />
          <i className="fas fa-search"></i>
        </div>
        <div className="compTitle__right">
          <Link
            href="/new-task"
            comp="compTitle"
            color="blue"
            size="normal"
          ></Link>
        </div>
      </Container>
      <div className="container container_comp_partners wrapper wrapper_comp_card">
        <div className="wrapper wrapper_comp_partners">
          <div className="partners__title">
            <span>Рога и Копыта, ООО</span>
            <img src={logo} alt="" />
          </div>
          <table className="table table_comp_partners">
            <tr>
              <th>
                <span className="table__bold">Руководитель</span>
              </th>
              <th>
                <span className="table__gray">Пупкин В.В.</span>
              </th>
            </tr>
            <tr>
              <th>
                <span className="table__bold">Бухгалтер</span>
              </th>
              <th>
                <span className="table__gray">Пупкин В.В.</span>
              </th>
            </tr>
            <tr>
              <th>
                <span className="table__bold">ИНН/КПП</span>
              </th>
              <th>
                <span className="table__gray">2102020002/1121201</span>
              </th>
            </tr>
          </table>
          <span className="table__gray partners__adress">
            127035, г. Москва, ул. Новый Арбат 1, оф. 3, стр. 2
          </span>
          <table className="table table_comp_partners">
            <tr>
              <th>
                <span className="table__bold">Телефоны</span>
              </th>
              <th>
                <span className="table__gray">+7 (495) 123-45-67</span>
              </th>
            </tr>
            <tr>
              <th>
                <span className="table__bold">E-mail</span>
              </th>
              <th>
                <span className="table__gray">info@site.com</span>
              </th>
            </tr>
            <tr>
              <th>
                <span className="table__bold">Сайт</span>
              </th>
              <th>
                <span className="table__gray">www.site.com</span>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};
