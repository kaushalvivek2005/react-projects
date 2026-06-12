import React from 'react';
import styles from './Form.module.css';

const Form = ({ children, onSubmit, title }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleFormSubmit}>
      {title && <h2 className={styles.formTitle}>{title}</h2>}
      <div className={styles.formFields}>
        {children}
      </div>
    </form>
  );
};

export default Form;