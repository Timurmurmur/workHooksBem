import React from "react";
import { Container } from "../Container/Container";
import { Link } from "../Link/Link";
import "./Profile.css";
import { Input } from "../Input/Input";
import { Img } from "../Img/Img";
import { Select } from "../Select/MySelect";
import { Button } from "../Button/Button";

export const Profile: React.FC = () => {
  return (
    <>
      <Container comp="compNav" type="container">
        <Container comp="compNav" type="wrapper">
          <ul>
            <li>
              <Link
                comp="compNav"
                color="gray"
                size="normal"
                href="/count/income"
              >
                <span>ПОСТАВЩИК</span>
              </Link>
            </li>
            <li>
              <Link
                comp="compNav"
                color="blue"
                size="normal"
                href="/count/outgoing"
                checked
              >
                <span>КЛИЕНТ</span>
              </Link>
            </li>
            <li>
              <Link
                comp="compNav"
                color="gray"
                size="normal"
                href="/count/outgoing"
              >
                <span>ПРОЧИЙ</span>
              </Link>
            </li>
          </ul>
        </Container>
      </Container>
      <Container comp="compTitle" type="wrapper">
        <div className="compTitle__left">
          <h1>Профиль пользователя</h1>
        </div>
      </Container>
      <Container comp="profile" type="container">
        <div className="wrapper wrapper_comp_card wrapper_comp_profile">
          <table className="table table_comp_profile">
            <tbody>
              <tr>
                <th>
                  <span>Фамилия</span>
                </th>
                <th>
                  <Input
                    comp="profile"
                    size="big"
                    placeholder="Введите Фамилию"
                    type="text"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <span>Имя</span>
                </th>
                <th>
                  <Input
                    comp="profile"
                    size="big"
                    placeholder="Введите Имя"
                    type="text"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <span>Отчество</span>
                </th>
                <th>
                  <Input
                    comp="profile"
                    size="big"
                    placeholder="Введите отчество"
                    type="text"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <span>E-mail</span>
                </th>
                <th>
                  <Input
                    comp="profile"
                    size="big"
                    placeholder="Введите E-mail"
                    type="text"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <span>Мобильный</span>
                </th>
                <th>
                  <Input
                    comp="profile"
                    size="big"
                    placeholder="Введите мобильный телефон"
                    type="text"
                  />
                </th>
              </tr>
            </tbody>
          </table>
          <div className="addProfileImg">
            <div className="addProfileImg__img">
              <img alt="Аватар" />
            </div>
            <span className="button button_type_dashed">
              добавить изображение
            </span>
          </div>
        </div>
        <div className="wrapper wrapper_comp_card wrapper_comp_profile">
          <table className="table table_comp_profile">
            <tbody>
              <tr>
                <th>
                  <span>Пол</span>
                </th>
                <th>
                  <Input
                    comp="profile"
                    size="big"
                    placeholder="Введите Фамилию"
                    type="text"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <span>Дата рождения</span>
                </th>
                <th className="container_comp_select">
                  <Select comp="profile" options={["День"]} />
                  <Select comp="profile" options={["Месяц"]} />
                  <Select comp="profile" options={["Год"]} />
                </th>
              </tr>
              <tr>
                <th>
                  <span>Skype</span>
                </th>
                <th>
                  <Input
                    comp="profile"
                    size="big"
                    placeholder="Введите Skype"
                    type="text"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <span>Facebook</span>
                </th>
                <th>
                  <Input
                    comp="profile"
                    size="big"
                    placeholder="Введите страницу на Facebook"
                    type="text"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <span>VKontakte</span>
                </th>
                <th>
                  <Input
                    comp="profile"
                    size="big"
                    placeholder="Введите страницу в VKontakte"
                    type="text"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <span>Instagram</span>
                </th>
                <th>
                  <Input
                    comp="profile"
                    size="big"
                    placeholder="Введите страницу в Instagram"
                    type="text"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <span>www страница</span>
                </th>
                <th>
                  <Input
                    comp="profile"
                    size="big"
                    placeholder="Введите адрес своей страницы"
                    type="text"
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
      <div className="profile__submit">
        <Button color="blue" comp="profile" size="normal">
          <span>СОХРАНИТЬ</span>
        </Button>
        <Button color="gray" comp="profile" size="normal">
          <span>ОТМЕНА</span>
        </Button>
      </div>
    </>
  );
};
