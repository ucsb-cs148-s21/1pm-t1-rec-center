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
                <h1 className="text-center mb-5 font-weight-bold title">Recreation Center Activity</h1>
                <div className="w-75 h-75">
                <CardGroup style={{ display: 'flex', flexDirection: 'row'}}>
                    <Card className='card' text='black' bg="rgba(240, 240, 240, 0.9)">
                    <Card.Title><h3 className="text-center mt-4 mb-1 font-weight-bold">Hourly Forecast</h3></Card.Title>
                        <Card.Body>
                            <h6 className='occupancy'><Now /></h6>
                            <Day />
                        </Card.Body>
                    </Card>
                </CardGroup>
                </div>
            </div>
        );
    }
}
 
export default Activity;
