import React from 'react';
import user_photo from '../../assets/images/user-photo.png';
import { Input } from '../../blocks/Input/Input';
import { Button } from '../../blocks/Button/Button';


export default function Comments(){
    return(
        <>
            <div className="comm__prev">
                <span>Предыдущие комментарии (9)</span>
            </div>
            <div className="comm__wrapper">
                <div className="comm__current">
                    <div className="comm-img">
                        <img src={user_photo} alt=""/>
                    </div>
                    <div className="comm__top">
                        
                        <div className="comm__main">
                            <div className="comm-title">
                                <span>Иванов Иван</span>
                                <span>13:24</span>
                            </div>
                            <div className="comm-text">
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus vulputate purus, vitae lobortis est. Duis aliquet nisl nec elit tincidunt malesuada. Suspendisse fringilla, leo at tristique euismod, mi libero pellentesque libero, nec scelerisque justo ipsum a purus. Duis nec metus efficitur, suscipit metus egestas, accumsan nibh. Nunc vel sapien ut lacus rhoncus porta. Proin ante libero, ultrices sed massa eget, ornare condimentum est.</span>
                            </div>
                        </div>
                        <div className="comm__options">
                            <span>Нравится</span>
                            <span>Редактировать</span>
                            <span>Еще</span>
                        </div>
                    </div>
                    
                </div>
                <div className="comm-new">
                    <div className="comm__current">
                        <div className="comm-img">
                            <img src={user_photo} alt=""/>
                        </div>
                        <div className="comm-new__main">
                            <textarea cols={30} rows={10} placeholder="Введите комментарий"></textarea>
                            <span>Затрачено времени <Input comp="comm" size="normal" type="text" placeholder="Часы"/></span>
                        </div>
                    </div>
                    <div className="comm-new__options">
                        <Button color="blue" comp="comm" size="normal"><span>ОТПРАВИТЬ</span></Button>
                        <Button color="gray" comp="comm" size="small"><span>ОТМЕНА</span></Button>
                    </div>
                </div>
            </div>
        </>);
}