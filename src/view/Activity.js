import React, { Component } from 'react';
import Dashboard from '../components/dashboard';
import './Activity.css'



class Activity extends Component {
    state = {  }
    render() { 
        let currentDay = new Date();
        currentDay = currentDay.toDateString();
        return (
            <div className='App-header animate__animated animate__fast animate__fadeIn'>
                <h1>Recreation Center Activity</h1>
                    <Dashboard/>
            </div>
        );
    }
}
 
export default Activity;
