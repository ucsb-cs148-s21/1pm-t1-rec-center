import React, { useEffect } from 'react';
import AppRoute from './utils/AppRoute';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

// Layout
import Layout from './components/Layout';

// View
import Home from './view/Home';
import About from './view/About';

function App() {

  useEffect(() => {
    fetch('/hello').then(res => res.json()).then(data => {
      console.log(data.content);
    });
  }, []);

  return (
	<BrowserRouter>
		<Switch>
			<AppRoute exact path="/" component={Home} layout={Layout} />
			<AppRoute path="/about" component={About} layout={Layout} />
		</Switch>
	</BrowserRouter>
  );
}

export default App;