import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [content, setContent] = useState(0);

  useEffect(() => {
    fetch('/hello').then(res => res.json()).then(data => {
      setContent(data.content);
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{content}</p>
      </header>
    </div>
  );
}

export default App;

