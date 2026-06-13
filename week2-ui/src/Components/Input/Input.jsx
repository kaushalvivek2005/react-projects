import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({
  label,
  id,
  name,
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  onBlur,
  onFocus,
  errorMessage = '',
  helpText = '',
  disabled = false,
  required = false,
  maxLength = null,
  minLength = null,
  pattern = null,
  icon = null, // Prefix icon
  suffix = null, // Suffix content
  variant = 'default', // default, underline, filled
  size = 'medium', // small, medium, large
  showCharCount = false,
  clearable = false,
  showPasswordToggle = false,
  ariaLabel = '',
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  // Handle blur
  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  // Handle focus
  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  // Handle clear button
  const handleClear = () => {
    if (onChange) {
      onChange({
        target: { name, value: '' },
      });
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Determine input type (for password toggle)
  const displayType = showPassword && type === 'password' ? 'text' : type;
  const hasError = Boolean(errorMessage);
  const showClearBtn = clearable && value && !disabled;

  const inputWrapperClass = `${styles.wrapper} ${styles[variant]} ${styles[size]} ${
    isFocused ? styles.focused : ''
  } ${hasError ? styles.error : ''} ${disabled ? styles.disabled : ''} ${className}`;

  return (
    <div className={inputWrapperClass}>
      {/* Label */}
      {label && (
        <label 
          htmlFor={id} 
          className={styles.label}
        >
          {label}
          {required && (
            <span className={styles.required} aria-label="required">
              *
            </span>
          )}
        </label>
      )}

      {/* Input Container */}
      <div className={styles.inputContainer}>
        {/* Prefix Icon */}
        {icon && (
          <span className={styles.prefixIcon} aria-hidden="true">
            {icon}
          </span>
        )}

        {/* Input */}
        <input
          ref={inputRef}
          id={id}
          name={name}
          type={displayType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}  // ← FIXED: Actual function
          onBlur={handleBlur}
          onFocus={handleFocus}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          className={styles.input}
          aria-label={ariaLabel || label}
          aria-invalid={hasError}
          aria-describedby={`${id}-error ${id}-help`}
          {...props}
        />

        {/* Suffix Actions */}
        <div className={styles.suffixContainer}>
          {/* Character Count */}
          {showCharCount && maxLength && (
            <span 
              className={styles.charCount}
              aria-live="polite"
              aria-atomic="true"
            >
              {value.length}/{maxLength}
            </span>
          )}

          {/* Password Toggle */}
          {type === 'password' && showPasswordToggle && (
            <button
              type="button"
              className={styles.toggleBtn}
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              disabled={disabled}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          )}

          {/* Clear Button */}
          {showClearBtn && (
            <button
              type="button"
              className={styles.clearBtn}
              onClick={handleClear}
              aria-label="Clear input"
              disabled={disabled}
            >
              ✕
            </button>
          )}

          {/* Custom Suffix */}
          {suffix && !showClearBtn && (
            <span className={styles.suffix} aria-hidden="true">
              {suffix}
            </span>
          )}
        </div>
      </div>

      {/* Error Message */}
      {hasError && (
        <span 
          id={`${id}-error`}
          className={styles.errorMessage} 
          role="alert"
        >
          {errorMessage}
        </span>
      )}

      {/* Help Text */}
      {helpText && !hasError && (
        <span 
          id={`${id}-help`}
          className={styles.helpText}
        >
          {helpText}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel', 'url', 'search']),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  errorMessage: PropTypes.string,
  helpText: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  pattern: PropTypes.string,
  icon: PropTypes.node,
  suffix: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'underline', 'filled']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  showCharCount: PropTypes.bool,
  clearable: PropTypes.bool,
  showPasswordToggle: PropTypes.bool,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
};

Input.displayName = 'Input';

export default Input;