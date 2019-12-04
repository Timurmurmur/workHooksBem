import React from "react";
import { useStore } from "react-redux";
import { Container } from "../Container/Container";
import { Link } from "../Link/Link";

export const Routing: React.FC = () => {
  const { router } = useStore().getState();

  const createRouting = (route: any) => {
    let arrayNames = [["Рабочий стол", "/"]];
    console.log(route.routes);
    const routeArray = route.pathname.split("/");
    console.log(routeArray);
    const routeList = route.routes;
    routeArray.map((el: any) => {
      console.log(el);
      if (el === "count") {
        arrayNames = [...arrayNames, ["Счета", "/count/income"]];
      } else if (el === "income") {
        arrayNames = [...arrayNames, ["Входящие", "/count/income"]];
      } else if (el === "outgoing") {
        arrayNames = [...arrayNames, ["Исходящие", "/count/outgoing"]];
      } else if (el === "new-count") {
        arrayNames = [...arrayNames, ["Новый счет", "/new/income"]];
      } else if (el === "tasks") {
        arrayNames = [...arrayNames, ["Задачи", "/tasks"]];
      } else if (el === "new-task") {
        arrayNames = [...arrayNames, ["Новая задача", "/tasks/new"]];
      } else if (el === "current-task") {
        arrayNames = [...arrayNames, ["Определенная задача", ""]];
      } else if (el === "partners") {
        arrayNames = [...arrayNames, ["Партнеры", "/partners"]];
      } else if (el === "") {
        return;
      }
    });
    console.log(arrayNames);
    return arrayNames.map(el => {
      return (
        <Link href={el[1]} comp="Routing" size="normall">
          {el[0] + " / "}
        </Link>
      );
    });
  };

  return (
    <Container comp="Routing" type="wrapper">
      {createRouting(router)}
    </Container>
  );
};
