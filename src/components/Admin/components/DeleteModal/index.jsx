import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import styles from './DeleteModal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteModal } from '../../../../redux/slices/modalSlice';
import trash from '../../../../assets/Icons/trash.png';
import { deleteProducts } from '../../../../redux/slices/productsSlice';
const DeleteModal = () => {
  const dispatch = useDispatch();
  const { deleteModal } = useSelector((state) => state.modal);
  const { productId } = useSelector((state) => state.products);
  const handleClose = () => dispatch(setDeleteModal(false));
  const handleDelete = () => {
    dispatch(deleteProducts(productId));
    handleClose();
  };

  return (
    <div className={styles.root}>
      <Modal
        open={deleteModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.box}>
          <img src={trash} alt="delete icon" />
          <p>Вы действительно хотите удалить данный товар?</p>
          <button onClick={handleDelete} className="__button">
            Удалить
          </button>
          <button onClick={handleClose} className={styles.cancelBtn}>
            Отменить
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
