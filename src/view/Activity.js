import React, { Component } from 'react';
import Day from './../components/Day';
import { Card } from 'react-bootstrap';
// import { CardGroup } from 'react-bootstrap';
import './Activity.css'



class Activity extends Component {
    state = {  }
    render() { 
        let currentDay = new Date();
        currentDay = currentDay.toDateString();
        return (
            <div className='App-header animate__animated animate__fast animate__fadeIn'>
                <h1>Recreation Center Activity</h1>
                    <Card className='card' text='black' bg="rgba(240, 240, 240, 0.9)">
                    <Card.Title><h3>Forecast for {currentDay}</h3></Card.Title>
                        <Card.Body>
                            <Day />
                        </Card.Body>
                    </Card>
            </div>
        );
    }
}
 
export default Activity;
