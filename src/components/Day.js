import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

var d = new Date();
var n = d.getDay();
var h = d.getHours();
n = (n+6) % 7;
var chartIndex = (h + 18) % 24;
var currOccupancy = -99;
var currHour = d.getHours();
var currMin = d.getMinutes();
var ampm = 'am';
if (currHour > 12){
    ampm = 'pm';
    currHour = currHour - 12;
} else if (currHour === 0){
    currHour = 12;
}



function rotateRight(arr, num){
    var i;
    for(i = 0; i < num; i++){
        let last = arr.pop();
        arr.unshift(last);
    }
    return arr;
}

const Day = (props) => {
    const [chartData, setChartData] = useState({});
        let timeData = props.day.data;
        let colors = props.day.colors;
        let colorBorders = props.day.colors;

    const chart = () => {

        let timeLabels = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];
        rotateRight(timeLabels,18);
        setChartData({
            labels: timeLabels,
            datasets: [
                {
                    label: 'Daily Forecast',
                    data: timeData,
                    backgroundColor: colors,
                    borderColor: colorBorders,
                    borderWidth: 1
                }
            ]
        })


    }

    useEffect(() => {
        chart()
        console.log(chartData);
    }, [])
    return (
        <Bar data={chartData} options={{
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
    )
}

export default Day;
