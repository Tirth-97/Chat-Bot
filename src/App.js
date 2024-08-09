import React, { useState } from 'react';
import RotatingText from './Component/RotatingText';
import StyledButton from './Component/StyledButton';
import Chatbot from './Component/Chatbot';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [showChat, setShowChat] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    setShowSignup(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="app-container">
      <header className="header">
        {!isLoggedIn ? (
          <>
            <a href="#" className="glowing-button" onClick={toggleSignup}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sign Up
            </a>
            <a href="#" className="glowing-button" onClick={toggleLogin}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Log In
            </a>
          </>
        ) : (
          <>
            <a href="#" className="glowing-button" onClick={handleLogout}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Log Out
            </a>
          </>
        )}
      </header>
      <div className="content-container">
        {!showChat && (
          <div className="content">
            <RotatingText />
            {isLoggedIn && (
              <StyledButton onClick={toggleChat} buttonText={showChat ? 'Close Chat' : 'Start Chat'} />
            )}
          </div>
        )}
        {showChat && <Chatbot onClose={toggleChat} />}
        {!showChat && (
          <div className="video-container">
            {/* <video src="/logo.mp4" autoPlay loop muted /> */}
          </div>
        )}
      </div>
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <label>
                Username:
                <input type="text" required />
              </label>
              <label>
                Password:
                <input type="password" required />
              </label>
              <button type="submit">Login</button>
            </form>
            <button className="close-button" onClick={toggleLogin}>Close</button>
          </div>
        </div>
      )}
      {showSignup && (
        <div className="modal">
          <div className="modal-content">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
              <label>
                Username:
                <input type="text" required />
              </label>
              <label>
                Password:
                <input type="password" required />
              </label>
              <button type="submit">Sign Up</button>
            </form>
            <button className="close-button" onClick={toggleSignup}>Close</button>
          </div>
        </div>
      )}
      {!showChat && (
        <>
          <video src="/robo-1.mp4" autoPlay loop muted className="right-upper-video" />
          <video src="/robo.mp4" autoPlay loop muted className="left-lower-video" />
        </>
      )}
    </div>
  );
};

export default App;
