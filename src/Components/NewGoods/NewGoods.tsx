import React from "react";
import { Container } from "../Container/Container";
import { Link } from "../Link/Link";
import { Button } from "../Button/Button";
import { Select } from "../Select/MySelect";
import { Input } from "../Input/Input";
import { Img } from "../Img/Img";
import "./NewGoods.css";
import { Checkbox } from "../Checkbox/Checkbox";

export const NewGoods: React.FC = () => {
  return (
    <>
      {" "}
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
                <span>ТОВАРЫ</span>
              </Link>
            </li>
            <li>
              <Link
                comp="compNav"
                color="gray"
                size="normal"
                href="/count/outgoing"
              >
                <span>ГРУППЫ ТОВАРОВ</span>
              </Link>
            </li>
          </ul>
        </Container>
      </Container>
      <Container comp="compTitle" type="wrapper">
        <div className="compTitle__left">
          <h1>Новый товар</h1>
          <span>Создайте новый товар</span>
        </div>
        <div className="compTitle__right">
          <Link
            href="/new-count/income"
            comp="compTitle"
            color="blue"
            size="normal"
          ></Link>
        </div>
      </Container>
      <div className="wrapper wrapper_comp_card ">
        <div className="wrapper wrapper_comp_newTask">
          <div className="newTask__top">
            <Input
              comp="newTask"
              size="big"
              type="text"
              placeholder="Введите название товара"
            />
          </div>
          <textarea placeholder="Введите описание товара"></textarea>
          <div className="wrapper wrapper_comp_addImage">
            <div className="addImage__images">
              <img
                style={{ width: 350, height: 230 }}
                src="https://it-b.ru/img/landing/perspective1.png"
                alt=""
              />
            </div>
            <span className="button button_comp_addImage">
              добавить изображение
            </span>
          </div>
          <div className="wrapper_comp_selectGroup">
            <span>Группа</span>
            <Select comp="newGoods" options={["Введите группу товара"]} />
          </div>
        </div>
      </div>
      <div className="wrapper wrapper_comp_card">
        <div className="wrapper wrapper_comp_newTask">
          <div className="container container_comp_newGoodsTable">
            <table className="table_comp_newTask">
              <tbody>
                <tr className="newTask__current">
                  <td>
                    <span>Цена</span>
                  </td>
                  <th>
                    <Input
                      size="normal"
                      comp="newTask"
                      type="text"
                      placeholder="0.00"
                    />
                  </th>
                </tr>
                <tr className="newTask__current">
                  <td>
                    <span>Валюта</span>
                  </td>
                  <th>
                    <Select comp="newTask" options={["Рубль"]}></Select>
                  </th>
                </tr>
                <tr className="newTask__current">
                  <Checkbox comp="newGoods">является услугой</Checkbox>
                </tr>
              </tbody>
            </table>
            <table className="table_comp_newTask">
              <tbody>
                <tr className="newTask__current">
                  <td>
                    <span>Ед. измерения</span>
                  </td>
                  <th>
                    <Select comp="newGoods" options={["шт."]}></Select>
                  </th>
                </tr>
                <tr className="newTask__current">
                  <td>
                    <span>Ставка НДС</span>
                  </td>
                  <th>
                    <Select comp="newGoods" options={["Без НДС"]}></Select>
                  </th>
                </tr>
                <tr className="newTask__current">
                  <Checkbox comp="newGoods">НДС включен в цену</Checkbox>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="newTask__footer">
            <Button size="normal" comp="newTask" color="blue">
              <span>СОХРАНИТЬ</span>
            </Button>
            <Button size="normal" comp="newTask" color="gray">
              <span>ОТМЕНА</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
