import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, description, image, children }) => {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.image} />}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {children && <div className={styles.footer}>{children}</div>}
      </div>
    </div>
  );
};

export default Card;