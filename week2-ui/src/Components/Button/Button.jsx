import React from 'react';
import styles from './Button.module.css';


const Buttons = ({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    disabled =false,
    type = 'button',
     ...props
}) => {
    const clasName = `${styles.btn} ${styles[variant]} ${styles[size]}`;
  
  return (
    <button
      type={type}
      className='className'
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Buttons;
