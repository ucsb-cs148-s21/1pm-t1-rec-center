<<<<<<< HEAD
import React, { useEffect } from 'react';
import AppRoute from './utils/AppRoute';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Now from './components/Now'
import Day from './components/Day'
import Layout from './components/Layout';
import Home from './view/Home';
import About from './view/About';
import Activity from './view/Activity';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
	<>
	<BrowserRouter>
		<Switch>
			<AppRoute exact path="/" component={Home} layout={Layout} />
			<AppRoute path="/about" component={About} layout={Layout} />
			<AppRoute path="/activity" component={Activity} layout={Layout} />
		</Switch>
	</BrowserRouter>
    <div>
    </div>
	</>
=======
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
>>>>>>> da13fb2cde0ad239ba863acfd49486b6ad1e1e8a
  );
}

export default App;
