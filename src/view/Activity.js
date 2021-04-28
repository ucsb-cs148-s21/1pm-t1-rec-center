import React, { Component } from 'react';
import Now from './../components/Now';
import Day from './../components/Day';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import './Activity.css'



class Activity extends Component {
    state = {  }
    render() { 
        return (
            <div className='App-header animate__animated animate__fast animate__fadeIn'>
                <h1>Recreation Center Activity</h1>
                    <Card className='card' text='black' bg="rgba(240, 240, 240, 0.9)">
                    <Card.Title><h3>Hourly Forecast</h3></Card.Title>
                        <Card.Body>
                            <h6 className='occupancy'><Now /></h6>
                            <Day />
                        </Card.Body>
                    </Card>
            </div>
        );
    }
}
 
export default Activity;
