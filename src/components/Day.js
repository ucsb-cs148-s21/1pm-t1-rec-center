import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

var d = new Date();
var n = d.getDay();
n = n-1 % 7;

console.log("day number: ", n);

var params = {
    'venue_id': 'ven_5965782d62435251644858524159365f51575f357263394a496843',
    'api_key_public': 'pub_e7764657ade1430cb9990b81dd156525',
    'day_int': n
}

function rotateRight(arr, num){
    var i;
    for(i = 0; i < num; i++){
        let last = arr.pop();
        arr.unshift(last);
    }
    return arr;
}

const Day = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        let timeData = [];
        let timeLabels = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];

        axios.get("https://besttime.app/api/v1/forecasts/day/raw?" + new URLSearchParams(params)).then(res => {
            console.log(res)
            for(const dataObj of res.data.analysis.day_raw){
                timeData.push(parseInt(dataObj))
            } 
            rotateRight(timeLabels, 18);
            setChartData({
                labels: timeLabels,
                datasets: [
                    {
                        label: 'Occupancy level',
                        data: timeData,
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgb(54, 162, 235)'
                        ],
                        borderWidth: 1
                    }
                ]
            })
        })
        .catch(err => {
            console.log(err)
        });
        console.log(timeData);
    }

    useEffect(() => {
        chart()
    }, [])
    return (
        <div>
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
        </div>
    )
}

export default Day;
