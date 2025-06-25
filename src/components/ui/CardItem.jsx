import React from 'react';
import styles from './CardItem.module.css';

const CardItem = ({ image, title, price, onClick, children }) => (
  <div className={styles.cardItem}>
    {image && (
      <img src={image} alt={title} className={styles.image} loading="lazy" />
    )}
    <div className={styles.content}>
      <h5 className={styles.title}>{title}</h5>
      {price && <span className={styles.price}>{price}</span>}
      {children}
      {onClick && (
        <button className={styles.button} onClick={onClick} aria-label={`Ver mais sobre ${title}`}>
          Ver mais
        </button>
      )}
    </div>
  </div>
);

export default CardItem;
