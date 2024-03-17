import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import Navigation from '../../layouts/Navigation';
import GoBack from '../../components/UI/GoBack';
import CartItem from '../../components/Cart/CartItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const Cart = () => {
  const { items, total, totalSum } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <Header />
        <Navigation />
      </header>
      <div className="cart__container">
        <div className={styles.root}>
          <div className={styles.cart}>
            <div className={styles.cart_title}>
              <p className="title">Корзина</p>
              <GoBack />
            </div>
            <div className={styles.cart_items}>
              <div className="line"></div>
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className={styles.cart_bottom}>
              <p className={styles.total}>
                Итого {total} товара <span>{totalSum} сом</span>
              </p>
              <button>
                <Link to="#" className="linkToCategory">
                  <p>Оформить покупку</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
