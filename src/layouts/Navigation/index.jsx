import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { useState } from 'react';

const Navigation = () => {
  const [pathname, setPathname] = useState('/');

  const links = [
    { to: '/', text: 'Главная страница' },
    { to: '/phone', text: 'Телефоны' },
    { to: '/laptop', text: 'Ноутбуки' },
    { to: '/cart', text: 'Корзина' },
    { to: '/favorits', text: 'Избранное' },
    { to: '/profile', text: 'Профиль' },
  ];

  return (
    <div className={styles.root}>
      <div className="nav__container">
        <nav>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} activeclassname="active">
              {link.text}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Navigation;
