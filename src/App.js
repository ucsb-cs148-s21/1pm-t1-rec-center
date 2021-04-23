import React, { useState, useEffect } from 'react';
import './App.css';
import Now from './Components/Now'
import Day from './Components/Day'

function App() {    
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>Hello World!</p>
      </header> */}
      {/* <Now /> */}
      <Day />
    </div>
  );
}

export default App;