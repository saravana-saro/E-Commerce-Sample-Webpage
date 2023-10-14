import React, { useState } from 'react';
import LoginForm from './Component/LoginForm';
import HomePage from './Component/HomePage';
import Signup from './Signup.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <HomePage username={username} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
