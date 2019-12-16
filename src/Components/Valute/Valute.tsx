import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";
import { Link } from "../Link/Link";
import { Modal } from "../Modal/Modal";
import "./Valute.css";

export const Valute: React.FC = () => {
  const [ModalVisibility, setModalVisibility] = useState(false);
  const closeModal = e => {
    e.preventDefault();
    setModalVisibility(false);
  };
  const showModal = e => {
    e.preventDefault();
    setModalVisibility(true);
  };
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
                <span>ВАЛЮТЫ</span>
              </Link>
            </li>
            <li>
              <Link
                comp="compNav"
                color="gray"
                size="normal"
                href="/count/outgoing"
              >
                <span>ЕДИНИЦЫ ИЗМЕРЕНИЯ</span>
              </Link>
            </li>
            <li>
              <Link
                comp="compNav"
                color="gray"
                size="normal"
                href="/count/outgoing"
              >
                <span>СТАВКИ НДС</span>
              </Link>
            </li>
          </ul>
        </Container>
      </Container>
      <Container comp="compTitle" type="wrapper">
        <div className="compTitle__left">
          <h1>Валюты</h1>
          <Input
            comp="compTitle"
            type="text"
            placeholder="Search…"
            size="normal"
          />
          <i className="fas fa-search"></i>
        </div>
        <div className="compTitle__right" onClick={showModal}>
          <Link comp="compTitle" color="blue" size="normal"></Link>
        </div>
      </Container>

      <div className="wrapper wrapper_comp_card container container_comp_valute">
        <div className="wrapper wrapper_comp_valute">
          <div className="countCard__options">
            <div className="countCard__pen">
              <i className="fas fa-pencil-alt"></i>
            </div>
            <div className="countCard__trash">
              <i className="fas fa-trash-alt"></i>
            </div>
          </div>
          <div className="valute__title">
            <span>Рубль</span>
            <span>RUR</span>
          </div>
          <div className="valute__category">
            <span>Базовая валюта</span>
          </div>
          <div className="valute__course">
            <span>Курс</span>
            <span>1.000</span>
          </div>
        </div>
      </div>
      {ModalVisibility === true ? (
        <Modal>
          <div className="modal__close" onClick={closeModal}>
            &times;
          </div>

          <div className="modal__title">
            <span>Новая валюта</span>
          </div>
          <table className="table table_comp_modal">
            <tbody>
              <tr>
                <th>
                  <span>Код</span>
                </th>
                <th>
                  <Input
                    comp="modal"
                    size="normal"
                    type="text"
                    placeholder="980"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <span>Наименование</span>
                </th>
                <th>
                  <Input
                    comp="modal"
                    size="normall"
                    type="text"
                    placeholder="Рубль"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <span>Международное наименование</span>
                </th>
                <th>
                  <Input
                    comp="modal"
                    size="normal"
                    type="text"
                    placeholder="RUR"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <span>Курс</span>
                  <Input
                    comp="modal"
                    type="text"
                    size="small"
                    placeholder="1.000"
                  />
                  <Button comp="modal" size="small" color="gray">
                    <span>
                      <i className="fas fa-redo"></i>
                    </span>
                  </Button>
                </th>
                <th>
                  <Checkbox comp="modal">базовая валюта</Checkbox>
                </th>
              </tr>
            </tbody>
          </table>
          <div className="modal__options">
            <Button comp="modal" color="blue" size="normall">
              <span>СОХРАНИТЬ</span>
            </Button>
            <Button comp="modal" color="gray" size="normall">
              <span>ОТМЕНА</span>
            </Button>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};
