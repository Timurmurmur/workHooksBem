import React, { FC } from 'react';
import { cn } from '@bem-react/classname';
import './Img.css';

interface IImageProps {
  src: ShapeType;
  comp: string;
  alt: string;
  width: number;
  height: number;
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
  header_reload = 'header_reload',
  header_change = 'header_change'
}

const hash = {
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
  [ShapeType.top_panel_search]: require('../../assets/icons/top-panel-search.png'),
  [ShapeType.header_reload]: require('../../assets/icons/main_reload.svg'),
  [ShapeType.header_change]: require('../../assets/icons/main_change.svg')
};

const imgCn = cn('img');

export const Img: React.FC<IImageProps> = React.memo(
  ({ src, comp, width, height, alt }) => {
    return (
      <img
        src={hash[ShapeType[src]]}
        alt={alt}
        style={{ width, height }}
        className={imgCn({ comp })}
      />
    );
  }
);

// React.memo(({size, comp, src, alt })) => (
//
// )
