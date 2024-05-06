import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greeting from './Component/Greeting.js';


function App() {
  return (
    <div className="App">
      <Greeting name="John" />
    </div>
  );
}

export default App;
