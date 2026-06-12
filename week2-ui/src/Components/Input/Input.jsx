import React from 'react';
import styles from './Input.module.css';

const Input = ({
    label,
    id,
    type ='text',
    placeHolder, 
    value,
    errorMessage,
    ...props
}) => {

    return (
        <div className={styles.wrapper}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder='placeholder'
        value={value}
        onChange='onChange'
        className={`${styles.input} ${errorMessage ? styles.errorBorder : ''}`}
        aria-invalid={errorMessage ? 'true' : 'false'}
        {...props}
      />
      {errorMessage && <span className={styles.errorText} role="alert">{errorMessage}</span>}
    </div>
    )
}

export default Input;