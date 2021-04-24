import React, { Component } from 'react';
import Day from './../components/Day';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import './Activity.css'



class Activity extends Component {
    state = {  }
    render() { 
        return (
            <div className='App-header'>
                <h1 className="text-center mb-5 font-weight-bold">Recreation Center Activity</h1>
                <div className="w-75 h-75">
                <CardGroup style={{ display: 'flex', flexDirection: 'row'}}>
                    <Card border='dark' text='white' bg="dark">
                    <Card.Title className="text-center mt-4 mb-1 font-weight-bold">Hourly Forecast</Card.Title>
                        <Card.Body>
                            <Day/>
                        </Card.Body>
                    </Card>
                </CardGroup>
                </div>
            </div>
        );
    }
}
 
export default Activity;
