import { useEffect, useState } from 'react';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Popover from '../Admin/components/PopoverBtn';
import PopoverBtn from '../Admin/components/PopoverBtn';
import { setProductId } from '../../redux/slices/productsSlice';
import { addItem, removeItem } from '../../redux/slices/cartSlice';
const Card = ({ item, mode, path }) => {
  const [toCard, setToCard] = useState(false);
  const [toFavorit, setToFavorit] = useState(false);
  const { name, color, price, imgUrl, id } = item;

  const dispatch = useDispatch();
  const isAdd = (state, set) => {
    state ? set(false) : set(true);
  };
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    if (items.some((cartItem) => cartItem.id === id)) {
      setToCard(true);
    } else {
      setToCard(false);
    }
  }, [items, id]);

  const handleCart = () => {
    if (!toCard) {
      setToCard(true);
      dispatch(addItem(item));
    } else {
      dispatch(removeItem(id));
      setToCard(false);
    }
  };

  const handleClick = () => {
    dispatch(setProductId(id));
    localStorage.setItem('productId', id);
  };

  return (
    <div className={styles.root}>
      <div className={styles.card_image}>
        <img src={imgUrl} alt="card-img" />
      </div>
      <div className={styles.card_desc}>
        <Link to={`/${path}/${id}`} onClick={() => handleClick()}>
          <p>
            {name}
            <span></span> <span>{color.name}</span>
          </p>
        </Link>
        <p>{price} сом</p>
        <div>
          {mode ? (
            <PopoverBtn id={id} />
          ) : (
            <div>
              <div className={styles.like} onClick={() => isAdd(toFavorit, setToFavorit)}>
                {!toFavorit ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="31"
                    viewBox="0 0 34 31"
                    fill="none"
                  >
                    <path
                      d="M33.1774 6.35283C32.6499 5.10966 31.8892 3.98311 30.938 3.03624C29.9861 2.08654 28.8638 1.33184 27.6321 0.813155C26.3549 0.273179 24.985 -0.0032116 23.602 2.81545e-05C21.6617 2.81545e-05 19.7687 0.540778 18.1236 1.56219C17.73 1.80653 17.3562 2.0749 17.0019 2.36731C16.6477 2.0749 16.2739 1.80653 15.8803 1.56219C14.2352 0.540778 12.3422 2.81545e-05 10.4019 2.81545e-05C9.00473 2.81545e-05 7.65088 0.272406 6.37179 0.813155C5.136 1.33388 4.02222 2.08292 3.06586 3.03624C2.11342 3.98204 1.35259 5.10886 0.826484 6.35283C0.27943 7.64663 0 9.02053 0 10.4345C0 11.7683 0.267623 13.1583 0.798934 14.5722C1.24366 15.7539 1.88123 16.9796 2.69591 18.2173C3.9868 20.176 5.76177 22.2188 7.96573 24.2897C11.618 27.7225 15.2348 30.0937 15.3883 30.1899L16.3211 30.7987C16.7343 31.0671 17.2656 31.0671 17.6789 30.7987L18.6116 30.1899C18.7651 30.0897 22.378 27.7225 26.0342 24.2897C28.2382 22.2188 30.0132 20.176 31.304 18.2173C32.1187 16.9796 32.7602 15.7539 33.201 14.5722C33.7323 13.1583 34 11.7683 34 10.4345C34.0039 9.02053 33.7245 7.64663 33.1774 6.35283Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="31"
                    viewBox="0 0 34 31"
                    fill="none"
                  >
                    <path
                      d="M33.1774 6.35283C32.6499 5.10966 31.8892 3.98311 30.938 3.03624C29.9861 2.08654 28.8638 1.33184 27.6321 0.813155C26.3549 0.273179 24.985 -0.0032116 23.602 2.81545e-05C21.6617 2.81545e-05 19.7687 0.540778 18.1236 1.56219C17.73 1.80653 17.3562 2.0749 17.0019 2.36731C16.6477 2.0749 16.2739 1.80653 15.8803 1.56219C14.2352 0.540778 12.3422 2.81545e-05 10.4019 2.81545e-05C9.00473 2.81545e-05 7.65088 0.272406 6.37179 0.813155C5.136 1.33388 4.02222 2.08292 3.06586 3.03624C2.11342 3.98204 1.35259 5.10886 0.826484 6.35283C0.27943 7.64663 0 9.02053 0 10.4345C0 11.7683 0.267623 13.1583 0.798934 14.5722C1.24366 15.7539 1.88123 16.9796 2.69591 18.2173C3.9868 20.176 5.76177 22.2188 7.96573 24.2897C11.618 27.7225 15.2348 30.0937 15.3883 30.1899L16.3211 30.7987C16.7343 31.0671 17.2656 31.0671 17.6789 30.7987L18.6116 30.1899C18.7651 30.0897 22.378 27.7225 26.0342 24.2897C28.2382 22.2188 30.0132 20.176 31.304 18.2173C32.1187 16.9796 32.7602 15.7539 33.201 14.5722C33.7323 13.1583 34 11.7683 34 10.4345C34.0039 9.02053 33.7245 7.64663 33.1774 6.35283Z"
                      fill="#FF0000"
                    />
                  </svg>
                )}
              </div>
              <div className={styles.addToCard} onClick={handleCart}>
                {!toCard ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="31"
                      height="31"
                      rx="7.5"
                      fill="black"
                      stroke="white"
                    />
                    <path
                      d="M20.6651 15.1313H17.2019V11.6683C17.2019 10.3329 15.1309 10.3329 15.1309 11.6683V15.1313H11.6678C10.3327 15.1313 10.3327 17.2022 11.6678 17.2022H15.1309V20.6652C15.1309 22.0006 17.2019 22.0006 17.2019 20.6652V17.2022H20.6651C22.0003 17.2022 22.0003 15.1313 20.6651 15.1313Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 1H24C27.866 1 31 4.13401 31 8V24C31 27.866 27.866 31 24 31H8C4.13401 31 1 27.866 1 24V8C1 4.13401 4.13401 1 8 1ZM0 8C0 3.58172 3.58172 0 8 0H24C28.4183 0 32 3.58172 32 8V24C32 28.4183 28.4183 32 24 32H8C3.58172 32 0 28.4183 0 24V8ZM24.7071 10.7071C25.0976 10.3166 25.0976 9.68342 24.7071 9.29289C24.3166 8.90237 23.6834 8.90237 23.2929 9.29289L13 19.5858L8.70711 15.2929C8.31658 14.9024 7.68342 14.9024 7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071L12.2929 21.7071C12.6834 22.0976 13.3166 22.0976 13.7071 21.7071L24.7071 10.7071Z"
                      fill="white"
                    />
                  </svg>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
