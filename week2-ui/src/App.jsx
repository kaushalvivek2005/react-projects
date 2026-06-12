import React, { useState } from 'react'

import Button from './Components/Button/Button'
import Input from './Components/Input/Input'
import Card from './Components/Card/Card'
import Modal from './Components/Modal/Modal'
import Form from './Components/Form/Form'

import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSub = () => {
    if (!email.includes('@')) {
      setError('Invalid Email!');
    } else {
      setError('');
      alert('Success!');
    }
  };


  const handleLoginSubmit = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill all the fields inside the form!');
    } else {
      alert(`Successfully Logged In!\nUsername: ${username}`);
      setIsModalOpen(false); 
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="Container">
      <header className="header">
        <h1>My Reusable UI Library</h1>
        <p>Vite + React Component Showcase (5 Components)</p>
      </header>

      <div className="showcase">
        {/* 1. Button Section */}
        <section className="box">
          <h2>1. Buttons</h2>
          <div className="demoRow flexRow"> 
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger" size="large">Danger Large</Button>
          </div>
        </section>

        {/* 2. Input Section */}
        <section className="box">
          <h2>2. Inputs</h2>
          <Input 
            id="main-email"
            label="Email Address" 
            placeholder="example@test.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            errorMessage={error}
          />
          <Button onClick={handleSub} size="small">Validate</Button>
        </section>

        {/* 3. Card Section */}
        <section className="box">
          <h2>3. Cards</h2>
          <Card 
            title="Modern React Development" 
            description="Learn how to build scalable UI component libraries with Vite quickly."
            image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60"
          >
            <Button variant="primary" size="small">Read More</Button>
          </Card>
        </section>

        {/* 4 & 5. Form & Modal Combined Section */}
        <section className="box">
          <h2>4 & 5. Form & Modal Showcase</h2>
          <Card 
            title="Secure User Access" 
            description="Click the button below to trigger an accessible pop-up modal containing a structured form element."
          >
            <Button variant="primary" size="medium" onClick={() => setIsModalOpen(true)}>
              Open Login Modal
            </Button>
          </Card>
        </section>
      </div>

      {/* MODAL COMPONENT */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Account Sign In"
      >
        {/* FORM COMPONENT */}
        <Form onSubmit={handleLoginSubmit}>
          <Input 
            id="modal-username"
            label="Username / Roll No"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input 
            id="modal-password"
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="primary" size="medium">
            Submit Details
          </Button>
        </Form>
      </Modal>
    </div>
  )
}

export default App