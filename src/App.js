import React, { useEffect } from 'react';
import AppRoute from './utils/AppRoute';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Now from './Components/Now'
import Day from './Components/Day'
import Layout from './components/Layout';
import Home from './view/Home';
import About from './view/About';

function App() {
  return (
	<BrowserRouter>
		<Switch>
			<AppRoute exact path="/" component={Home} layout={Layout} />
			<AppRoute path="/about" component={About} layout={Layout} />
		</Switch>
	</BrowserRouter>
    <div>
      <Day />
    </div>
  );
}

export default App;