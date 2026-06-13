import React, { useState } from 'react';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import Card from './Components/Card/Card';
import Modal from './Components/Modal/Modal';
import {Form, FormProvider, FormField } from './Components/Form';

import './App.css';

function App() {
  // Email validation state
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSuccess, setEmailSuccess] = useState('');

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Login form initial values
  const initialLoginValues = {
    username: '',
    password: '',
  };

  // Email validation handler
  const handleEmailValidate = () => {
    setEmailSuccess('');
    
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }
    
    if (!email.includes('@')) {
      setEmailError('Invalid email format');
      return;
    }
    
    if (!email.includes('.')) {
      setEmailError('Email must contain a domain');
      return;
    }

    setEmailError('');
    setEmailSuccess('✓ Email is valid!');
    setEmail('');
  };

  // Login form submission handler
  const handleLoginSubmit = async (values) => {
    console.log('Login attempt with:', values);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsModalOpen(false);
  };

  // Validation rules for login form
  const loginValidators = {
    username: [
      (value) => !value ? 'Username is required' : '',
      (value) => value.length < 3 ? 'Username must be at least 3 characters' : '',
    ],
    password: [
      (value) => !value ? 'Password is required' : '',
      (value) => value.length < 6 ? 'Password must be at least 6 characters' : '',
    ],
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>My Reusable UI Library</h1>
        <p>Vite + React Component Showcase (5 Components)</p>
        <p className="subtitle">Built with modern accessibility & responsive design</p>
      </header>

      {/* Main Showcase Grid */}
      <div className="showcase">
        
        {/* 1. Button Section */}
        <section className="box">
          <h2>1. Buttons</h2>
          <div className="demo-row flex-row">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger" size="large">Danger Large</Button>
            <Button variant="outline" disabled>Disabled</Button>
          </div>
          <p className="description">
            Props: <code>variant</code>, <code>size</code>, <code>disabled</code>, <code>loading</code>
          </p>
        </section>

        {/* 2. Input Section */}
        <section className="box">
          <h2>2. Inputs</h2>
          <Input
            id="email-input"
            name="email"
            label="Email Address"
            type="email"
            placeholder="example@test.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errorMessage={emailError}
            required
            showCharCount
            maxLength={50}
          />
          {emailSuccess && (
            <div className="success-message" role="alert">
              {emailSuccess}
            </div>
          )}
          <Button 
            onClick={handleEmailValidate} 
            size="small"
            variant="primary"
            style={{ marginTop: '0.5rem' }}
          >
            Validate Email
          </Button>
          <p className="description">
            Props: <code>variant</code>, <code>size</code>, <code>icon</code>, <code>clearable</code>, <code>showPasswordToggle</code>
          </p>
        </section>

        {/* 3. Card Section */}
        <section className="box">
          <h2>3. Cards</h2>
          <Card
            title="Modern React Development"
            description="Learn how to build scalable UI component libraries with Vite quickly."
            image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60"
            variant="elevated"
            hoverable
          >
            <Button variant="primary" size="small">Read More</Button>
          </Card>
          <p className="description">
            Props: <code>variant</code>, <code>hoverable</code>, <code>onClick</code>, <code>loading</code>
          </p>
        </section>

        {/* 4 & 5. Form & Modal Combined Section */}
        <section className="box">
          <h2>4 & 5. Form & Modal Showcase</h2>
          <Card
            title="Secure User Access"
            description="Click the button below to trigger an accessible pop-up modal containing a structured form element."
            variant="outlined"
          >
            <Button
              variant="primary"
              size="medium"
              onClick={() => setIsModalOpen(true)}
            >
              Open Login Modal
            </Button>
          </Card>
          <p className="description">
            Props: Modal - <code>isOpen</code>, <code>onClose</code>, <code>size</code>, <code>footer</code>
          </p>
        </section>
      </div>

      {/* Modal with Form */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Account Sign In"
        size="medium"
        footer={
          <div className="modal-footer">
            <Button
              variant="secondary"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              form="login-form"
            >
              Sign In
            </Button>
          </div>
        }
      >
        <FormProvider
          initialValues={initialLoginValues}
          onSubmit={handleLoginSubmit}
        >
          <Form
            id="login-form"
            title=""
            validators={loginValidators}
          >
            <Input
              id="username-input"
              name="username"
              label="Username / Roll No"
              type="text"
              placeholder="Enter your username"
              required
            />
            <Input
              id="password-input"
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              required
              showPasswordToggle
            />
          </Form>
        </FormProvider>
      </Modal>

      {/* Footer */}
      <footer className="footer">
        <p>Component Library v1.0 • Built with React + Vite</p>
        <p>All components are accessible, responsive, and production-ready ✨</p>
      </footer>
    </div>
  );
}

export default App;