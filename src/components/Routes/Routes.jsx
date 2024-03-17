import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router';
import Home from '../../pages/Home';
import Phone from '../../pages/Phone';
import Laptop from '../../pages/Laptop';
import PhoneDeatails from '../PhoneDetails';
import Cart from '../../pages/Cart';
import Favorits from '../../pages/Favorits';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Admin from '../../pages/Admin';
import AddProduct from '../Admin/AddProduct';
import Main from '../Admin/Main';
import Products from '../Admin/Products';

const Routes = () => {
  return (
    <>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/phone/:id" element={<PhoneDeatails />} />
        <Route path="/laptop/:id" element={<PhoneDeatails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorits" element={<Favorits />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/*" element={<Admin />}>
          <Route index exact element={<Main />} />
          <Route path="createProduct" element={<AddProduct />} />
          <Route path="allProducts" element={<Products />} />
        </Route>
      </ReactRoutes>
    </>
  );
};

export default Routes;
