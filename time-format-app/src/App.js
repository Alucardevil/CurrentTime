import React, { useState, useEffect } from 'react';
import './App.css';

function CurrentTime() {
  const [isMilitaryTime, setIsMilitaryTime] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTimeFormat = () => setIsMilitaryTime(!isMilitaryTime);

  const formatTime = () => {
    return isMilitaryTime ? currentTime.toLocaleTimeString('en-US', { hour12: false })
                          : currentTime.toLocaleTimeString('en-US');
  };

  return (
    <div>
      <h2>Current Time</h2>
      <p>{formatTime()}</p>
      <button onClick={toggleTimeFormat}>
        Switch to {isMilitaryTime ? 'Normal' : 'Military'} Time
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CurrentTime />
      </header>
    </div>
  );
}

export default App;
