import React from "react";
import { Link } from "../Link/Link";
import { Input } from "../Input/Input";
import { Container } from "../Container/Container";
import { Slider } from "../Slider/Slider";
import "./Goods.css";

export const Goods: React.FC = () => {
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
          <>
            <h1>Товары</h1>
          </>
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
            href="/new-count/income"
            comp="compTitle"
            color="blue"
            size="normal"
          ></Link>
        </div>
      </Container>
      <div className="container container_comp_partners wrapper wrapper_comp_card">
        <div className="wrapper wrapper_comp_goods">
          <Slider
            imgArray={[
              "https://sun9-29.userapi.com/c855528/v855528394/169b07/YTJwYyOL27Q.jpg",
              "https://it-b.ru/img/landing/perspective1.png",
              "https://it-b.ru/img/landing/perspective1.png"
            ]}
          />
          <div className="goods__info">
            <div className="goods__title">
              <span>1С:Предприятие 8. Автоматизация бизнеса</span>
            </div>
            <div className="goods__decription">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum rhoncus vulputate purus, vitae lobortis est. Duis
                aliquet nisl nec elit tincidunt malesuada.
              </span>
            </div>
            <div className="goods__price">
              <span>10 500 ₽</span>
            </div>
            <table cellSpacing={10} className="table table_comp_goods">
              <tbody>
                <tr>
                  <th>
                    <span>Группа товара</span>
                  </th>
                  <th>
                    <span>1C</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span>Ед. измерения</span>
                  </th>
                  <th>
                    <span>шт.</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span>Ставка НДС</span>
                  </th>
                  <th>
                    <span>без НДС</span>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
