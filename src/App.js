import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import './App.css';

function App() {
  const [content, setContent] = useState(0);

  useEffect(() => {
    fetch('/hello').then(res => res.json()).then(data => {
      setContent(data.content);
    });
  }, []);

  return (
	<>
		<Layout>
			<div className="App">
			  <header className="App-header">
				<h1>{content}</h1>
				<p>Hello World!</p>
			  </header>
			</div>
		</Layout>
	</>
  );
}

export default App;