import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  loading = false,
  'aria-label': ariaLabel,
  ...props
}) => {
  // Fix: Variable ko correctly use karo
  const className = `${styles.btn} ${styles[variant]} ${styles[size]} ${
    loading ? styles.loading : ''
  }`;

  return (
    <button
      type={type}
      className={className}  // ← Yea tha issue! String me likha tha
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-label={ariaLabel || children}  // Accessibility
      aria-busy={loading}  // Loading state indication
      {...props}
    >
      {loading ? (
        <>
          <span className={styles.spinner}></span>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};

// PropTypes validation
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  loading: PropTypes.bool,
  'aria-label': PropTypes.string,
};

// For debugging in React DevTools
Button.displayName = 'Button';

export default Button;