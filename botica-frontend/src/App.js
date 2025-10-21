import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    if (token && storedRole) {
      setIsLoggedIn(true);
      setRole(storedRole);
    }
  }, []);

  const handleLogin = (userRole) => {
    setIsLoggedIn(true);
    setRole(userRole);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole('');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  const toggleForm = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div>
          {showRegister ? (
            <>
              <RegisterForm />
              <button onClick={toggleForm} className="btn btn-link">
                ¿Ya tienes cuenta? Inicia sesión
              </button>
            </>
          ) : (
            <>
              <LoginForm onLogin={handleLogin} />
              <button onClick={toggleForm} className="btn btn-link">
                ¿No tienes cuenta? Regístrate
              </button>
            </>
          )}
        </div>
      ) : (
        <Dashboard role={role} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
