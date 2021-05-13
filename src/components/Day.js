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
} else if (currHour == 0){
    currHour = 12;
}

console.log("date: ", d);
console.log("day number: ", n);
console.log("hour number: ", h);
console.log("chart index: ", chartIndex);

var params = {
    'venue_id': 'ven_5965782d62435251644858524159365f51575f357263394a496843',
    'api_key_public': 'pub_9a1b3395b4ba4b42973adb9b6bb0f646',
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
        let colors = ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)'];
        colors[chartIndex] = 'rgba(255, 99, 132, 0.2)';

        let colorBorders = ['rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)'];
        colorBorders[chartIndex] = 'rgba(255, 99, 132)';
        console.log("color borders: ",colorBorders);


        let timeLabels = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];

        axios.get("https://besttime.app/api/v1/forecasts/day/raw?" + new URLSearchParams(params)).then(res => {
            console.log(res)
            for(const dataObj of res.data.analysis.day_raw){
                timeData.push(parseInt(dataObj))
            }
            currOccupancy = timeData[chartIndex]; 
            console.log("current occupancy: ", currOccupancy);
            rotateRight(timeLabels, 18);
            console.log("time labels", timeLabels);
            console.log("time data", timeData);
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
        <>
        <div>   
            <h2>Current occupancy level: {currOccupancy}%</h2>
            <h6>Current time: {currHour}:{currMin}{ampm}</h6>
        </div>        
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
        </>
    )
}

export default Day;
