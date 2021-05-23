import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';
import './Activity.css';

var date = new Date();
var optionsWeekDay = { weekday: 'long'};
var optionsMonth = { month: 'long' };
let day = new Intl.DateTimeFormat('en-US', optionsWeekDay).format(date)
let dayOfMonth = date.getDate();
let month = new Intl.DateTimeFormat('en-US', optionsMonth).format(date)
let year = date.getFullYear();

class Activity extends Component {
    state = {  }
    render() { 
        let currentDay = new Date();
        currentDay = currentDay.toDateString();
        return (
            <div className='App-header animate__animated animate__fast animate__fadeIn'>
                <h1>{day}, {dayOfMonth} {month} {year}</h1>
                    <Dashboard/>
            </div>
        );
    }
}
 
export default Activity;
