import React from 'react';
import './App.css';
import Timer from './timer/timer.jsx'

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="row">
        <h1>Pomodoro Timer</h1>
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default App;
