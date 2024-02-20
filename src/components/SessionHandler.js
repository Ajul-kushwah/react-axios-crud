import React, { useState, useEffect } from 'react';

function SessionHandler() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Function to start a session for the authenticated user
  const startSession = (username) => {
    const sessionData = {
      username: username,
      loggedIn: true,
      // Set session expiration time (e.g., 30 minutes)
      expirationTime: new Date().getTime() + 30 * 60 * 1000 // 30 minutes from now
    };
    localStorage.setItem('userSession', JSON.stringify(sessionData));
    setLoggedInUser(username);
  };

  // Function to check if a session exists and is still valid
  const checkSession = () => {
    const sessionData = localStorage.getItem('userSession');

    if (sessionData) {
      const { username, loggedIn, expirationTime } = JSON.parse(sessionData);
      if (loggedIn && new Date().getTime() < expirationTime) {
        setLoggedInUser(username);
      } else {
        endSession();
      }
    }
  };

  // Function to end the user session
  const endSession = () => {
    localStorage.removeItem('userSession');
    setLoggedInUser(null);
  };

  // useEffect hook to check session when the component mounts
  useEffect(() => {
    checkSession();
  }, []);

  // Example function to simulate user login
  const handleLogin = () => {
    startSession('exampleUser');
  };

  // Example function to simulate user logout
  const handleLogout = () => {
    endSession();
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <p>Welcome, {loggedInUser}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default SessionHandler;
