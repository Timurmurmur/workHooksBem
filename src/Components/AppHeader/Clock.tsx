import React, { useState } from "react";

export const Timer: React.FC = () => {
  const [time, setTime] = useState();
  const [monthDay, setMonthDay] = useState();
  const [weekDay, setWeekDay] = useState();
  const [month, setMonth] = useState();

  setInterval(() => {
    var now = new Date();
    setTime(now.toLocaleTimeString());
    setMonthDay(now.getDate());
    chooseWeekDay(now.getDay(), now.getMonth());
  }, 1000);

  const chooseWeekDay = (day: number, month: number) => {
    let weekdayArray = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота"
    ];
    let monthArray = [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Ноября",
      "Декабря"
    ];
    setWeekDay(weekdayArray[day]);
    setMonth(monthArray[month - 1]);
  };
  return (
    <>
      <div className="timer__time">
        <span>{time}</span>
      </div>
      <div className="timer__other">
        <span className="timer__weekday">{weekDay}</span>
        <span className="timer__monthday">
          {monthDay} {month}
        </span>
      </div>
    </>
  );
};
