import React from 'react';
import styles from './Feedback.module.scss';

const Feedback = () => {
  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <p>Есть вопросы?</p>
        <span>Оставьте комментарий</span>
        <form className={styles.form}>
          <div className={styles.group}>
            <input placeholder="" type="text" required="" />
            <label htmlFor="name">Имя</label>
          </div>
          <div className={styles.group}>
            <input placeholder="" type="email" id="email" name="email" required="" />
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles.group}>
            <textarea placeholder="" id="comment" name="comment" rows="5" required=""></textarea>
            <label htmlFor="comment">Комментарии</label>
          </div>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
