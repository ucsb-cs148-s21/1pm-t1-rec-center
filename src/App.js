import React from 'react';
import AppRoute from './utils/AppRoute';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './view/Home';
import About from './view/About';
import Activity from './view/Activity';
import Hours from './view/Hours';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
	<>
		<BrowserRouter>
			<Switch>
				<AppRoute exact path="/" component={Home} layout={Layout} />
				<AppRoute path="/about" component={About} layout={Layout} />
				<AppRoute path="/activity" component={Activity} layout={Layout} />
				<AppRoute path="/hours" component={Hours} layout={Layout} />
			</Switch>
		</BrowserRouter>
	</>
  );
}

export default App;