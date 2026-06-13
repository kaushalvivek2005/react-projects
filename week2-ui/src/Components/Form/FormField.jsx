import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './FormContext';
import styles from './FormField.module.css';

const FormField = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  required = false,
  disabled = false,
  className = '',
  children, // For custom inputs
  ...props
}) => {
  const { values, errors, touched, handleChange, handleBlur } = useContext(FormContext);

  const hasError = touched[name] && errors[name];
  const fieldId = `field-${name}`;

  return (
    <div className={`${styles.fieldWrapper} ${hasError ? styles.hasError : ''}`}>
      {label && (
        <label htmlFor={fieldId} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-label="required">*</span>}
        </label>
      )}

      {children ? (
        // Custom input (render as children)
        React.cloneElement(children, {
          id: fieldId,
          name,
          value: values[name] || '',
          onChange: handleChange,
          onBlur: handleBlur,
          'aria-invalid': hasError,
          'aria-describedby': hasError ? `${fieldId}-error` : undefined,
          disabled,
          className: `${children.props.className || ''} ${styles.input}`,
        })
      ) : (
        // Standard input
        <input
          id={fieldId}
          type={type}
          name={name}
          placeholder={placeholder}
          value={values[name] || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required}
          disabled={disabled}
          className={`${styles.input} ${className}`}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${fieldId}-error` : undefined}
          {...props}
        />
      )}

      {/* Error Message */}
      {hasError && (
        <div 
          id={`${fieldId}-error`}
          className={styles.errorMessage}
          role="alert"
        >
          {errors[name]}
        </div>
      )}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

FormField.displayName = 'FormField';

export default FormField;