import React from "react";
import "./style/style.css";
import user_photo from "../../assets/images/user-photo.png";
import { Container } from "../Container/Container";
import { Link } from "../Link/Link";
import Comments from "./Comments";
import TaskChangesHistory from "./TaskChangesHistory";
import { Button } from "../Button/Button";

interface IState {
  history: boolean;
}

export class CurrentTask extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      history: false
    };
  }

  componenthidMount() {
    console.log(this.props);
  }

  renderHistory(event: any) {
    event.preventDefault();
    console.log(event.target.textContent);
    if (event.target.textContent == "ИСТОРИЯ10") {
      this.setState({
        history: true
      });
    } else {
      this.setState({
        history: false
      });
    }
    console.log(this.state.history);
  }

  render() {
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
                  <span>ПРОЕКТНАЯ ЗАДАЧА</span>
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
                  <span>ЗАДАЧА</span>
                </Link>
              </li>
            </ul>
          </Container>
        </Container>
        <Container comp="compTitle" type="wrapper">
          <div className="compTitle__left">
            <h1>Название задачи</h1>
          </div>
        </Container>
        <div className="container container_comp_TaskCurrent">
          <div className="wrapper wrapper_comp_TaskCurrent ">
            <div className="wrapper wrapper_comp_card">
              <div className="TaskCurrent__title">
                <span>Задача #12345</span>
                <div className="checkbox checkbox_comp_TaskCurrent">
                  <input type="checkbox" id="index" />
                  <label htmlFor="index">это важная задача</label>
                </div>
              </div>
              <div className="TaskCurrent__description">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum rhoncus vulputate purus, vitae lobortis est. Duis
                  aliquet nisl nec elit tincidunt malesuada. Suspendisse
                  fringilla, leo at tristique euismod, mi libero pellentesque
                  libero, nec scelerisque justo ipsum a purus. Duis nec metus
                  efficitur, suscipit metus egestas, accumsan nibh. Nunc vel
                  sapien ut lacus rhoncus porta. Proin ante libero, ultrices sed
                  massa eget, ornare condimentum est. Maecenas ornare ante a
                  risus fringilla laoreet. Nunc vel tristique nisi. Quisque
                  luctus, turpis vel tristique lobortis, mauris lectus ornare
                  erat, id commodo nunc enim non tellus. Integer mauris felis,
                  vehicula sit amet bibendum ac, tempus a enim. Sed ut orci leo.
                  Pellentesque eget ex non massa consectetur pulvinar. Donec a
                  commodo turpis, dignissim mollis dolor. Nullam rutrum sodales
                  auctor. Sed leo ante, blandit sit amet euismod in, vehicula a
                  ipsum.
                </span>
              </div>
              <div className="TaskCurrent__checklist">
                <div>
                  <span>Чек-лист</span>
                </div>
                <div>
                  <span>добавить</span>
                </div>
              </div>
              <div className="TaskCurrent__options">
                <Button comp="TaskCurrent" size="normal" color="green">
                  НАЧАТЬ ВЫПОЛНЕНИЕ
                </Button>
                <Button comp="TaskCurrent" size="normal" color="green">
                  ЗАВЕРШИТЬ
                </Button>
                <Button comp="TaskCurrent" size="small" color="gray">
                  ЕЩЕ
                </Button>
                <span>редактировать</span>
              </div>
            </div>
            <div className="wrapper wrapper_comp_card count-new__block TaskCurrent__block TaskCurrent__comments">
              <div className="TaskCurrent__nav wrapper wrapper_comp_compNav">
                {this.state.history === false ? (
                  <ul>
                    <li className="TaskCurrent__selected">
                      <span
                        onClick={event => this.renderHistory(event)}
                        className="component-nav_current"
                      >
                        КОММЕНТАРИИ<div>10</div>
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={event => this.renderHistory(event)}
                        className="component-nav_current"
                      >
                        ИСТОРИЯ<div>10</div>
                      </span>
                    </li>
                  </ul>
                ) : (
                  <ul>
                    <li>
                      <span
                        onClick={event => this.renderHistory(event)}
                        className="component-nav_current"
                      >
                        КОММЕНТАРИИ<div>10</div>
                      </span>
                    </li>
                    <li className="TaskCurrent__selected">
                      <span
                        onClick={event => this.renderHistory(event)}
                        className="component-nav_current"
                      >
                        ИСТОРИЯ<div>10</div>
                      </span>
                    </li>
                  </ul>
                )}
              </div>
              {this.state.history === false ? (
                <Comments />
              ) : (
                <TaskChangesHistory />
              )}
            </div>
          </div>
          <div className="current-task__right task-stat">
            <div className="task-stat__title">
              <span>Ждет выполнения с 20.03.2019</span>
            </div>
            <div className="task-stat__main">
              <table>
                <tr className="task-stat__block">
                  <th>
                    <span>Крайний срок</span>
                  </th>
                  <th>
                    <span>20.03.2019 19:00</span>
                  </th>
                </tr>
                <tr className="task-stat__block">
                  <th>
                    <span>Поставлена</span>
                  </th>
                  <th>
                    <span>20.03.2019 09:00</span>
                  </th>
                </tr>
                <tr className="task-stat__block">
                  <th>
                    <span>Выделено</span>
                  </th>
                  <th>
                    <span>20:00:00</span>
                  </th>
                </tr>
                <tr className="task-stat__block">
                  <th>
                    <span>Затрачено</span>
                  </th>
                  <th>
                    <span>09:04:51</span>
                  </th>
                </tr>
                <tr className="task-stat__block">
                  <th>
                    <span>Выполнено на</span>
                  </th>
                  <th>
                    <span>15%</span>
                  </th>
                </tr>
                <tr className="task-stat__block">
                  <th>
                    <span>Стадия</span>
                  </th>
                  <th className="task-part">
                    <div className="task-part__checked"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </th>
                </tr>
                <tr className="task-stat__block task-stat__user-title">
                  <th>
                    <span>Постановщик</span>
                  </th>
                </tr>
                <tr className="task-stat__user-info">
                  <div className="task-stat__user-img">
                    <img src={user_photo} alt="" />
                  </div>
                  <div className="task-stat__user-descr">
                    <p>Иванов Иван</p>
                    <p>Руководитель отдела БО</p>
                  </div>
                </tr>
                <tr className="task-stat__block task-stat__user-title task-stat__change-worker">
                  <th>
                    <span>Исполнитель</span>
                  </th>
                  <th>
                    <span>сменить</span>
                  </th>
                </tr>
                <tr className="task-stat__user-info">
                  <div className="task-stat__user-img">
                    <img src={user_photo} alt="" />
                  </div>
                  <div className="task-stat__user-descr">
                    <p>Сидоров Олег</p>
                    <p>Бухгалтер</p>
                  </div>
                </tr>
              </table>
            </div>
            <div className="task-stat__user"></div>
          </div>
        </div>
      </>
    );
  }
}
