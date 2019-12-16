import React, { useState } from "react";
import { Container } from "../Container/Container";
import { Link } from "../Link/Link";
import { Input } from "../Input/Input";
import { Select } from "../Select/MySelect";
import "./NewPartner.css";
import { Button } from "../Button/Button";
import { useStore } from "react-redux";

export const NewPartner: React.FC = () => {
  const [smallMenu, setSmallMenu] = useState(false);
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
          <h1>Новый партнер</h1>
        </div>
      </Container>
      <div className="wrapper wrapper_comp_card">
        <div className="wrapper wrapper_comp_newPartner">
          <div className="newPartner__input">
            <span>Наименование</span>
            <Input
              comp="newPartner"
              size="normal"
              placeholder="Введите наименование партнера"
              type="text"
            />
          </div>
          <div className="newPartner__input">
            <span>Полное наименование</span>
            <Input
              comp="newPartner"
              size="normal"
              placeholder="Введите полное наименование партнера"
              type="text"
            />
          </div>
          <div className="newPartner__input">
            <span>Сокращенное наименование</span>
            <Input
              comp="newPartner"
              size="normal"
              placeholder="Введите сокращенное наименование партнера"
              type="text"
            />
          </div>
          <div className="newPartner__input">
            <span>Наименование</span>
            <Select comp="newPartner" options={["Юридическое лицо"]} />
          </div>
          <div className="newPartner__radio">
            <input type="radio" name="radio1" id="radio1" />
            <label htmlFor="radio1">Клиент</label>
            <input type="radio" name="radio1" id="radio2" />
            <label htmlFor="radio2">Поставщик</label>
            <input type="radio" name="radio1" id="radio3" />
            <label htmlFor="radio3">Прочее</label>
          </div>
          <div className="newPartner__footer">
            <div className="newPartner__input">
              <span>ИНН</span>
              <Input
                type="text"
                size="smal"
                comp="newPartner"
                placeholder="ИНН"
              ></Input>
            </div>
            <Button comp="newPartner" color="gray" size="small">
              <span>
                <i className="fas fa-redo"></i>
              </span>
            </Button>
            <div className="newPartner__input">
              <span>КПП</span>
              <Input
                type="text"
                size="smal"
                comp="newPartner"
                placeholder="КПП"
              ></Input>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper wrapper_comp_card container_comp_newPartner">
        {smallMenu === false ? (
          <>
            <Container comp="compNav" type="wrapper">
              <ul>
                <li onClick={() => setSmallMenu(true)}>
                  <Link comp="compNav" color="blue" size="normal" checked>
                    <span>БАНКОВСКИЕ РЕКВИЗИТЫ</span>
                  </Link>
                </li>
                <li onClick={() => setSmallMenu(true)}>
                  <Link comp="compNav" color="gray" size="normal">
                    <span>КОНТАКТНЫЕ ДАННЫЕ</span>
                  </Link>
                </li>
              </ul>
            </Container>
            <table className="table table_comp_bankRequez ">
              <tr>
                <th>
                  <span>Наименование банка</span>
                </th>
                <th>
                  <Input
                    comp="bankRequez"
                    size="normal"
                    placeholder="Введите название банка"
                    type="text"
                  ></Input>
                </th>
              </tr>
              <tr>
                <th>
                  <span># расчетного счета</span>
                </th>
                <th>
                  <Input
                    comp="bankRequez"
                    size="normal"
                    placeholder="Введите номер расчетного счета"
                    type="text"
                  ></Input>
                </th>
              </tr>
              <tr>
                <th>
                  <span>БИК</span>
                </th>
                <th>
                  <Input
                    comp="bankRequez"
                    size="small"
                    placeholder="БИК банка"
                    type="text"
                  ></Input>
                  <Select comp="newPartner" options={["Рубль"]}></Select>
                </th>
              </tr>
              <tr>
                <th>
                  <span># кор. счета</span>
                </th>
                <th>
                  <Input
                    comp="bankRequez"
                    size="normal"
                    placeholder="Введите номер корреспондирующего счета"
                    type="text"
                  ></Input>
                </th>
              </tr>
              <tr>
                <th>
                  <span>Адрес банка</span>
                </th>
                <th>
                  <Input
                    comp="bankRequez"
                    size="normal"
                    placeholder="Введите адрес банка"
                    type="text"
                  ></Input>
                </th>
              </tr>
            </table>
          </>
        ) : (
          <>
            <Container comp="compNav" type="wrapper">
              <ul>
                <li onClick={() => setSmallMenu(false)}>
                  <Link comp="compNav" color="gray" size="normal">
                    <span>БАНКОВСКИЕ РЕКВИЗИТЫ</span>
                  </Link>
                </li>
                <li onClick={() => setSmallMenu(true)}>
                  <Link comp="compNav" color="blue" size="normal" checked>
                    <span>КОНТАКТНЫЕ ДАННЫЕ</span>
                  </Link>
                </li>
              </ul>
            </Container>
            <div className="wrapper wrapper_comp_newPartner">
              <table className="table table_comp_newPartner">
                <tr>
                  <th className="tableLine tableLine_size_small">
                    <span>Руководитель</span>
                    <Input
                      comp="newPartner"
                      size="normal"
                      type="text"
                      placeholder="Введите ФИО руководителя"
                    />
                  </th>
                  <th className="tableLine tableLine_size_small">
                    <span>Должность</span>
                    <Input
                      comp="newPartner"
                      size="normal"
                      type="text"
                      placeholder="Введите должность руководителя"
                    />
                  </th>
                </tr>
                <tr>
                  <th className="tableLine tableLine_size_small">
                    <span>Бухгалтер</span>
                    <Input
                      comp="newPartner"
                      size="normal"
                      type="text"
                      placeholder="Введите номер расчетного счета"
                    />
                  </th>
                  <th className="tableLine tableLine_size_small">
                    <span>Должность</span>
                    <Input
                      comp="newPartner"
                      size="normal"
                      type="text"
                      placeholder="Введите должность бухгалтера"
                    />
                  </th>
                </tr>
                <tr>
                  <th className="tableLine tableLine_size_big">
                    <span>Юридический адрес</span>
                    <Input
                      comp="newPartner"
                      size="big"
                      type="text"
                      placeholder="Введите юридический адрес партнера"
                    />
                  </th>
                </tr>
                <tr>
                  <th className="tableLine tableLine_size_big">
                    <span>Фактический адрес</span>
                    <Input
                      comp="newPartner"
                      size="big"
                      type="text"
                      placeholder="Введите фактический адрес партнера"
                    />
                  </th>
                </tr>
                <tr>
                  <th className="tableLine tableLine_size_small">
                    <span>Телефоны</span>
                    <Input
                      comp="newPartner"
                      size="normal"
                      type="text"
                      placeholder="Введите телефоны партнера"
                    />
                  </th>
                  <th className="tableLine tableLine_size_small">
                    <span>E-mail</span>
                    <Input
                      comp="newPartner"
                      size="normal"
                      type="text"
                      placeholder="Введите E-mail партнера"
                    />
                  </th>
                </tr>
                <tr>
                  <th className="tableLine tableLine_size_big">
                    <span>Сайт</span>
                    <Input
                      comp="newPartner"
                      size="big"
                      type="text"
                      placeholder="Введите адрес сайта партнера"
                    />
                  </th>
                </tr>
              </table>
            </div>
          </>
        )}
        <div className="newPartner__footer">
          <Button comp="newPartner" size="normal" color="blue">
            <span>СОХРАНИТЬ</span>
          </Button>
          <Button comp="newPartner" size="normal" color="gray">
            <span>ОТМЕНА</span>
          </Button>
        </div>
      </div>
    </>
  );
};
