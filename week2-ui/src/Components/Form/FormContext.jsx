import React, { createContext, useState, useCallback } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children, onSubmit, initialValues = {} }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  // Handle field change
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  }, [errors]);

  // Handle field blur
  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  }, []);

  // Set field error
  const setFieldError = useCallback((fieldName, errorMessage) => {
    setErrors((prev) => ({
      ...prev,
      [fieldName]: errorMessage,
    }));
  }, []);

  // Validate field
  const validateField = useCallback((name, value, validators = {}) => {
    const validationRules = validators[name] || [];
    
    for (let rule of validationRules) {
      const error = rule(value);
      if (error) {
        setFieldError(name, error);
        return false;
      }
    }
    
    setFieldError(name, '');
    return true;
  }, [setFieldError]);

  // Handle form submit
  const handleSubmit = useCallback(async (validators = {}) => {
    return async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitMessage(null);

      // Validate all fields
      let isValid = true;
      const newTouched = {};

      Object.keys(values).forEach((fieldName) => {
        newTouched[fieldName] = true;
        if (!validateField(fieldName, values[fieldName], validators)) {
          isValid = false;
        }
      });

      setTouched(newTouched);

      if (isValid && onSubmit) {
        try {
          await onSubmit(values);
          setSubmitMessage({ type: 'success', text: 'Form submitted successfully!' });
          // Reset form after successful submission
          setTimeout(() => {
            resetForm();
            setSubmitMessage(null);
          }, 2000);
        } catch (error) {
          setSubmitMessage({ 
            type: 'error', 
            text: error.message || 'Form submission failed!' 
          });
        }
      }

      setIsSubmitting(false);
    };
  }, [values, onSubmit, validateField]);

  // Reset form
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setSubmitMessage(null);
  }, [initialValues]);

  const value = {
    values,
    errors,
    touched,
    isSubmitting,
    submitMessage,
    handleChange,
    handleBlur,
    setFieldError,
    validateField,
    handleSubmit,
    resetForm,
    setValues,
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};