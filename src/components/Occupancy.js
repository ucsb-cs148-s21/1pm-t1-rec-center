import React, { Component } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Occupancy.css';

class Occupancy extends Component {
    state = {  }
    render() { 
        return (
            <div style={{ width: 200, height: 200 }}>
                <CircularProgressbarWithChildren value={this.props.percentage} styles={{
                    path:{
                        stroke: '#4B76E4',
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                    },
                    trail: {
                        stroke: '#ABABAB',
                        strokeLinecap: 'butt',
                      },
                    }}>
                    <p id='percentage'>{this.props.percentage}%</p>
                </CircularProgressbarWithChildren>
            </div>
        );
    }
}
 
export default Occupancy;