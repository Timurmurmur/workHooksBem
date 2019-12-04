import React from "react";
import { Container } from "../Container/Container";
import { Img, ShapeType } from "../Img/Img";
import { Link } from "../Link/Link";
import "./AppHeader.css";
import { Routing } from "../Routing/Routing";
import { Timer } from "./Clock";

export const AppHeader: React.FC = ({ children }) => {
  return (
    <>
      <Container type="wrapper" comp="AppHeader">
        <div className="AppHeader_pos_left">
          <Container type="wrapper" comp="userBlock">
            <Container type="wrapper" comp="userPhoto">
              <Img
                src={ShapeType.user_photo}
                comp="userPhoto"
                width={70}
                height={70}
                alt=""
              />
            </Container>
            <div className="userBlock_info">
              <p>username</p>
            </div>
            <div className="userBlock_post">
              <span>Название должности</span>
              <Img
                src={ShapeType.user_post}
                comp="userBlock"
                width={13}
                height={13}
                alt=""
              />
            </div>
          </Container>
          <Container type="wrapper" comp="AppHeaderNavLeft">
            <Link href="/" comp="AppHeaderNav" color="white" size="small">
              <Img
                src={ShapeType.desktop_icon}
                alt=""
                comp="AppHeaderNav"
                width={50}
                height={50}
              />
              <span>Рабочий стол</span>
            </Link>
            <Link
              href="/count/income"
              comp="AppHeaderNav"
              color="white"
              size="small"
            >
              <Img
                src={ShapeType.price_icon}
                alt=""
                comp="AppHeaderNav"
                width={50}
                height={50}
              />
              <span>Счета</span>
            </Link>
            <Link href="/tasks" comp="AppHeaderNav" color="white" size="small">
              <Img
                src={ShapeType.header_task}
                alt=""
                comp="AppHeaderNav"
                width={50}
                height={50}
              />
              <span>Задачи</span>
            </Link>
            <Link href="" comp="AppHeaderNav" color="white" size="small">
              <Img
                src={ShapeType.header_message}
                alt=""
                comp="AppHeaderNav"
                width={50}
                height={50}
              />
              <span>Сообщения</span>
            </Link>
            <Link href="" comp="AppHeaderNav" color="white" size="small">
              <Img
                src={ShapeType.header_mail}
                alt=""
                comp="AppHeaderNav"
                width={50}
                height={50}
              />
              <span>Почта</span>
            </Link>
            <Link
              href="/partners"
              comp="AppHeaderNav"
              color="white"
              size="small"
            >
              <Img
                src={ShapeType.header_partners}
                alt=""
                comp="AppHeaderNav"
                width={50}
                height={50}
              />
              <span>Партнеры</span>
            </Link>
            <Link href="" comp="AppHeaderNav" color="white" size="small">
              <Img
                src={ShapeType.header_analyst}
                alt=""
                comp="AppHeaderNav"
                width={50}
                height={50}
              />
              <span>Аналитика</span>
            </Link>
          </Container>
        </div>
        <div className="wrappper wrapper_comp_InnerHeader">
          <div className="AppHeader_pos_top">
            <Container comp="AppHeaderTop" type="container">
              <Container comp="timer" type="wrapper">
                <Timer />
              </Container>
              <Container comp="AppHeaderNavTop" type="wrapper">
                <Link
                  href=""
                  comp="AppHeaderNavTop"
                  color="black"
                  size="small"
                  count
                  countBg="green"
                >
                  <span>3</span>
                  <Img
                    src={ShapeType.header_mail}
                    alt=""
                    comp="AppHeaderNav"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link
                  href=""
                  comp="AppHeaderNavTop"
                  color="black"
                  size="small"
                  count
                  countBg="green"
                >
                  <span>3</span>
                  <Img
                    src={ShapeType.header_message}
                    alt=""
                    comp="AppHeaderNav"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link
                  href=""
                  comp="AppHeaderNavTop"
                  color="black"
                  size="small"
                  count
                  countBg="gray"
                >
                  <span>3</span>
                  <Img
                    src={ShapeType.top_panel_noftication}
                    alt=""
                    comp="AppHeaderNav"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href="" comp="AppHeaderNavTop" color="black" size="small">
                  <Img
                    src={ShapeType.top_panel_search}
                    alt=""
                    comp="AppHeaderNav"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link
                  href="/auth/login"
                  comp="AppHeaderNavTop"
                  color="black"
                  size="normal"
                >
                  <Img
                    src={ShapeType.top_panel_logout}
                    alt=""
                    comp="AppHeaderNav"
                    width={50}
                    height={50}
                  />
                </Link>
              </Container>
            </Container>
          </div>
          <div className="wrapper wrapper_comp_content">
            <Routing />
            {children}
          </div>
        </div>
        <div className="AppHeader_pos_right">
          <Link comp="AppHeaderRight" href="#" size="small">
            <Img
              src={ShapeType.top_panel_right}
              comp="AppHeaderNav"
              alt=""
              width={50}
              height={50}
            />
          </Link>
        </div>
      </Container>
      <div className="AppHeader_pos_bottom">
        <span>© 2019 BNet Group. Все права защищены.</span>
      </div>
    </>
  );
};
