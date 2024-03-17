import { Collapse } from 'antd';
import { NavLink } from 'react-router-dom';
import {
  LogoutOutlined,
  ProductOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';

import styles from './MenuNav.module.scss';

const { Panel } = Collapse;
const AdminMenuItems = [
  {
    key: '1',
    label: 'Продукты',
    childrens: [
      {
        id: 1,
        title: 'Все товары',
        path: 'allProducts',
      },
      {
        id: 2,
        title: 'Добавление товара',
        path: 'createProduct',
      },
    ],
    icon: <ProductOutlined />,
  },
  {
    key: '2',
    label: 'Пользователи',
    childrens: [
      {
        id: 1,
        title: 'Список пользователей',
        path: 'userList',
      },
      {
        id: 2,
        title: 'Обновление user',
        path: 'updateUser',
      },
      {
        id: 3,
        title: 'Удаление user',
        path: 'deleteUser',
      },
    ],
    icon: <UserSwitchOutlined />,
  },
];

const MenuNav = () => {
  return (
    <div className={styles.root}>
      <div className={styles.admin_info}>
        <UserOutlined />
        <p>user@gmail.com</p>
      </div>
      <Collapse className={styles.collapse}>
        {AdminMenuItems.map((item, i) => (
          <Panel
            key={item.key}
            className={styles.panel}
            header={
              <span>
                {item.icon} {item.label}
              </span>
            }
          >
            {item.childrens.map((elem) => (
              <NavLink to={elem.path} className={styles.link} key={elem.id}>
                {elem.title}
              </NavLink>
            ))}
          </Panel>
        ))}
      </Collapse>

      <div className={styles.logout}>
        <LogoutOutlined />
        <p>Выйти из аккаунта</p>
      </div>
    </div>
  );
};

export default MenuNav;
