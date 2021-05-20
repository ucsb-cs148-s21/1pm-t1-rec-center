import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


let timeLabels = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am', '1am', '2am', '3am', '4am', '5am'];


export default class Day extends Component {
    state = {
        chartData: {
            labels: timeLabels,
            datasets: [
                {
                    label: 'Activity',
                    data: this.props.day.data,
                    backgroundColor: this.props.day.colors,
                    borderColor: this.props.day.colorBorders,
                    borderWidth: 1
                }
            ]
        }
    }

    render() {
        console.log(this.state.chartData); 
        return (  
            <Bar data={this.state.chartData} options={{
                responsive: true,
                title: {text: 'Occupancy Level', display: true},
                scales: {
                    yAxes: 
                        {
                            gridLines: {
                                show: false,
                            },
                            beginAtZero: true,
                            suggestedMax: 100
                        },
                        xAxes: {
                            gridLines: {
                                show: false
                            }
                        }
                }
            }}/>
        );
    }
}