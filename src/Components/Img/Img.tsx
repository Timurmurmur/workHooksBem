import React, { FC } from 'react'
import { cn } from '@bem-react/classname'
import './Img.css';

interface IImageType {
  src: ShapeType;
  comp: string;
  size: string;
  alt: string;
}
export enum ShapeType {
  user_photo = 'user_photo',
  user_post = 'user_post',
  desktop_icon = 'desktop_icon',
  price_icon = 'price_icon',
  header_task = 'header_task',
  header_message = 'header_message',
  header_mail = 'header_mail',
  header_analyst = 'header_analyst',
  header_partners = 'header_partners',
  top_panel_right = 'top_panel_right',
  top_panel_noftication = 'top_panel_noftication',
  top_panel_logout = 'top_panel_logout',
  top_panel_search = 'top_panel_search',
}

const hash  = {
  [ShapeType.user_photo]: require('../../assets/icons/user-photo.png'),
  [ShapeType.user_post]: require('../../assets/icons/user-post.png'),
  [ShapeType.desktop_icon]: require('../../assets/icons/header-desktop.png'),
  [ShapeType.price_icon]: require('../../assets/icons/header-price.png'),
  [ShapeType.header_task]: require('../../assets/icons/header-task.png'),
  [ShapeType.header_message]: require('../../assets/icons/header-message.png'),
  [ShapeType.header_mail]: require('../../assets/icons/header-mail.png'),
  [ShapeType.header_analyst]: require('../../assets/icons/header-analystic.png'),
  [ShapeType.header_partners]: require('../../assets/icons/header-partners.png'),
  [ShapeType.top_panel_right]: require('../../assets/icons/top-panel-right.png'),
  [ShapeType.top_panel_noftication]: require('../../assets/icons/top-panel-noftication.png'),
  [ShapeType.top_panel_logout]: require('../../assets/icons/top-panel-logout.png'),
  [ShapeType.top_panel_search]: require('../../assets/icons/top-panel-search.png')
}

const imgCn = cn('img');

export const Img: React.FC<IImageType> = React.memo(({ src,comp,size,alt }) => {
  return <img src={hash[ShapeType[src]]} alt={alt} className={imgCn({comp,size})} />;
});


// React.memo(({size, comp, src, alt })) => (
//   
// )

