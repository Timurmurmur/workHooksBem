import React from 'react';
import user_photo from '../../assets/images/user-photo.png';
import { Button } from '../../blocks/Button/Button';


export default function Comments(){
    return(
        <>
           <div className="history__wrapper">
               <table>
                   <tr>
                       <th className="history-naming"><span>Дата</span></th>
                       <th className="history-naming"><span>Автор</span></th>
                       <th className="history-naming"><span>Где изменилось</span></th>
                       <th className="history-naming"><span>Изменение</span></th>
                   </tr>
                   <tr>
                       <th><span className="history-gray">20.03.2019 09:00</span></th>
                       <th><span className="history-blue">Иванов Иван</span></th>
                       <th><span className="history-black">Добавлен комментарий #72327</span></th>
                       <th><span className="history-blue"></span></th>
                   </tr>
                   <tr>
                       <th><span className="history-gray">20.03.2019 19:00</span></th>
                       <th><span className="history-blue">Иванов Иван</span></th>
                       <th><span className="history-black">Ответственный</span></th>
                       <th><span className="history-blue">Сидоров Олег  Иванов Иван</span></th>
                   </tr>
               </table>
               <div className="comm-new__options">
                    <Button color="blue" comp="comm" size="normal"><span>ОТПРАВИТЬ</span></Button>
                    <Button color="gray" comp="comm" size="small"><span>ОТМЕНА</span></Button>
                </div>
           </div>
        </>);
}