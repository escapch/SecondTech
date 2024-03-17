import React, { useEffect, useState } from 'react';

import styles from './Admin.module.scss';
import MenuNav from '../../components/Admin/MenuNav';
import { Outlet } from 'react-router';
import Home from '../../components/UI/Home';

const Admin = () => {
  return (
    <div className={styles.root}>
      <div className={styles.menu}>
        <MenuNav />
      </div>
      <div className={styles.content}>
        <Home />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
