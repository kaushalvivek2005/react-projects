import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './FormContext';
import styles from './Form.module.css';

const Form = ({ 
  children, 
  onSubmit, 
  title,
  validators = {},
  resetOnSubmit = true,
  className = '',
}) => {
  const formContext = useContext(FormContext);

  if (!formContext) {
    throw new Error('Form must be used within FormProvider');
  }

  const { handleSubmit, submitMessage, isSubmitting } = formContext;

  const handleFormSubmit = handleSubmit(validators);

  return (
    <form 
      className={`${styles.formContainer} ${className}`}
      onSubmit={handleFormSubmit}
      noValidate
      role="form"
      aria-busy={isSubmitting}
    >
      {/* Form Title */}
      {title && (
        <h2 className={styles.formTitle} id="form-title">
          {title}
        </h2>
      )}

      {/* Error/Success Messages */}
      {submitMessage && (
        <div 
          className={`${styles.message} ${styles[submitMessage.type]}`}
          role="alert"
          aria-live="polite"
        >
          <span className={styles.messageIcon}>
            {submitMessage.type === 'success' ? '✓' : '✕'}
          </span>
          {submitMessage.text}
        </div>
      )}

      {/* Form Fields */}
      <fieldset 
        className={styles.formFields}
        disabled={isSubmitting}
        aria-describedby={title ? 'form-title' : undefined}
      >
        {children}
      </fieldset>
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  validators: PropTypes.object,
  resetOnSubmit: PropTypes.bool,
  className: PropTypes.string,
};

Form.displayName = 'Form';

export default Form;