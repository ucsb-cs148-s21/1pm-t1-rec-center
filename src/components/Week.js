import React, { useState, useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

var d = new Date();
var n = d.getDay();
let currentDay = new Date();
currentDay = currentDay.toDateString();
n = (n+6) % 7;
// n = 0-6 (monday = 0, sunday = 6)
var chartIndex = (d.getHours() + 18) % 24;
// 0 = 6am, 23 = 5am
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

var defaultDay = "Monday";
if (n === 0) {
    defaultDay = "Monday";
} else if (n === 1) {
    defaultDay = "Tuesday";
} else if (n === 2) {
    defaultDay = "Wednesday";
} else if (n === 3) {
    defaultDay = "Thursday";
} else if (n === 4) {
    defaultDay = "Friday";
} else if (n === 5) {
    defaultDay = "Saturday";
} else if (n === 6) {
    defaultDay = "Sunday";
} 

var params = {
    'venue_id': 'ven_5965782d62435251644858524159365f51575f357263394a496843',
    'api_key_public': 'pub_9a1b3395b4ba4b42973adb9b6bb0f646'
}

let mondayData = [];
let tuesdayData = [];
let wednesdayData = [];
let thursdayData = [];
let fridayData = [];
let saturdayData = [];
let sundayData = [];


// axios.get("https://besttime.app/api/v1/forecasts/week/raw2?" + new URLSearchParams(params)).then(res => {
//     console.log(res)
//     for(const dataObj of res.data.analysis.week_raw[0].day_raw){
//         mondayData.push(parseInt(dataObj))
//     }
//     for(const dataObj of res.data.analysis.week_raw[1].day_raw){
//         tuesdayData.push(parseInt(dataObj))
//     }
//     for(const dataObj of res.data.analysis.week_raw[2].day_raw){
//         wednesdayData.push(parseInt(dataObj))
//     }
//     for(const dataObj of res.data.analysis.week_raw[3].day_raw){
//         thursdayData.push(parseInt(dataObj))
//     }
//     for(const dataObj of res.data.analysis.week_raw[4].day_raw){
//         fridayData.push(parseInt(dataObj))
//     }
//     for(const dataObj of res.data.analysis.week_raw[5].day_raw){
//         saturdayData.push(parseInt(dataObj))
//     }
//     for(const dataObj of res.data.analysis.week_raw[6].day_raw){
//         sundayData.push(parseInt(dataObj))
//     }

//     currOccupancy = timeData[chartIndex]; 
//     rotateRight(timeLabels, 18);

//     setChartData({
//         labels: timeLabels,
//         datasets: [
//             {
//                 label: 'Daily Forecast',
//                 data: timeData,
//                 backgroundColor: colors,
//                 borderColor: colorBorders,
//                 borderWidth: 1
//             }
//         ]
//     })
// })
// .catch(err => {
//     console.log(err)
// });

function rotateRight(arr, num){
    var i;
    for(i = 0; i < num; i++){
        let last = arr.pop();
        arr.unshift(last);
    }
    return arr;
}

const Week = () => {
    const [monChartData, setMonChartData] = useState({});
    const [tuesChartData, setTuesChartData] = useState({});
    const [wedChartData, setWedChartData] = useState({});
    const [thursChartData, setThursChartData] = useState({});
    const [friChartData, setFriChartData] = useState({});
    const [satChartData, setSatChartData] = useState({});
    const [sunChartData, setSunChartData] = useState({});

    const chart = () => {
        let normal = ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)'];
        let colors = ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)'];
        colors[chartIndex] = 'rgba(255, 99, 132, 0.2)';

        let normalBorders = ['rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)'];
        let colorBorders = ['rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)'];
        colorBorders[chartIndex] = 'rgba(255, 99, 132)';


        let timeLabels = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];

        axios.get("https://besttime.app/api/v1/forecasts/week/raw2?" + new URLSearchParams(params)).then(res => {
            console.log(res)
            for(const dataObj of res.data.analysis.week_raw[0].day_raw){
                mondayData.push(parseInt(dataObj))
            }
            for(const dataObj of res.data.analysis.week_raw[1].day_raw){
                tuesdayData.push(parseInt(dataObj))
            }
            for(const dataObj of res.data.analysis.week_raw[2].day_raw){
                wednesdayData.push(parseInt(dataObj))
            }
            for(const dataObj of res.data.analysis.week_raw[3].day_raw){
                thursdayData.push(parseInt(dataObj))
            }
            for(const dataObj of res.data.analysis.week_raw[4].day_raw){
                fridayData.push(parseInt(dataObj))
            }
            for(const dataObj of res.data.analysis.week_raw[5].day_raw){
                saturdayData.push(parseInt(dataObj))
            }
            for(const dataObj of res.data.analysis.week_raw[6].day_raw){
                sundayData.push(parseInt(dataObj))
            }

            rotateRight(timeLabels, 18);

            setMonChartData({
                labels: timeLabels,
                datasets: [
                    {
                        label: 'Daily Forecast',
                        data: mondayData,
                        backgroundColor: normal,
                        borderColor: normalBorders,
                        borderWidth: 1
                    }
                ]
            })
            setTuesChartData({
                labels: timeLabels,
                datasets: [
                    {
                        label: 'Daily Forecast',
                        data: tuesdayData,
                        backgroundColor: normal,
                        borderColor: normalBorders,
                        borderWidth: 1
                    }
                ]
            })
            setWedChartData({
                labels: timeLabels,
                datasets: [
                    {
                        label: 'Daily Forecast',
                        data: wednesdayData,
                        backgroundColor: normal,
                        borderColor: normalBorders,
                        borderWidth: 1
                    }
                ]
            })
            setThursChartData({
                labels: timeLabels,
                datasets: [
                    {
                        label: 'Daily Forecast',
                        data: thursdayData,
                        backgroundColor: normal,
                        borderColor: normalBorders,
                        borderWidth: 1
                    }
                ]
            })
            setFriChartData({
                labels: timeLabels,
                datasets: [
                    {
                        label: 'Daily Forecast',
                        data: fridayData,
                        backgroundColor: normal,
                        borderColor: normalBorders,
                        borderWidth: 1
                    }
                ]
            })
            setSatChartData({
                labels: timeLabels,
                datasets: [
                    {
                        label: 'Daily Forecast',
                        data: saturdayData,
                        backgroundColor: normal,
                        borderColor: normalBorders,
                        borderWidth: 1
                    }
                ]
            })
            setSunChartData({
                labels: timeLabels,
                datasets: [
                    {
                        label: 'Daily Forecast',
                        data: sundayData,
                        backgroundColor: normal,
                        borderColor: normalBorders,
                        borderWidth: 1
                    }
                ]
            })
            if(n === 0){
                currOccupancy = mondayData[chartIndex]; 
                setMonChartData({
                    labels: timeLabels,
                    datasets: [
                        {
                            label: 'Daily Forecast',
                            data: mondayData,
                            backgroundColor: colors,
                            borderColor: colorBorders,
                            borderWidth: 1
                        }
                    ]
                })
            } else if(n === 1){
                currOccupancy = tuesdayData[chartIndex]; 
                setTuesChartData({
                    labels: timeLabels,
                    datasets: [
                        {
                            label: 'Daily Forecast',
                            data: tuesdayData,
                            backgroundColor: colors,
                            borderColor: colorBorders,
                            borderWidth: 1
                        }
                    ]
                })
            } else if(n === 2){
                currOccupancy = wednesdayData[chartIndex]; 
                setWedChartData({
                    labels: timeLabels,
                    datasets: [
                        {
                            label: 'Daily Forecast',
                            data: wednesdayData,
                            backgroundColor: colors,
                            borderColor: colorBorders,
                            borderWidth: 1
                        }
                    ]
                })
            } else if(n === 3){
                currOccupancy = thursdayData[chartIndex]; 
                setThursChartData({
                    labels: timeLabels,
                    datasets: [
                        {
                            label: 'Daily Forecast',
                            data: thursdayData,
                            backgroundColor: colors,
                            borderColor: colorBorders,
                            borderWidth: 1
                        }
                    ]
                })
            } else if(n === 4){
                currOccupancy = fridayData[chartIndex]; 
                setFriChartData({
                    labels: timeLabels,
                    datasets: [
                        {
                            label: 'Daily Forecast',
                            data: fridayData,
                            backgroundColor: colors,
                            borderColor: colorBorders,
                            borderWidth: 1
                        }
                    ]
                })
            } else if(n === 5){
                currOccupancy = saturdayData[chartIndex]; 
                setSatChartData({
                    labels: timeLabels,
                    datasets: [
                        {
                            label: 'Daily Forecast',
                            data: saturdayData,
                            backgroundColor: colors,
                            borderColor: colorBorders,
                            borderWidth: 1
                        }
                    ]
                })
            } else if(n === 6){
                currOccupancy = sundayData[chartIndex]; 
                setSunChartData({
                    labels: timeLabels,
                    datasets: [
                        {
                            label: 'Daily Forecast',
                            data: sundayData,
                            backgroundColor: colors,
                            borderColor: colorBorders,
                            borderWidth: 1
                        }
                    ]
                })
            }

        })
        .catch(err => {
            console.log(err)
        });
    }

    useEffect(() => {
        chart()
    }, [])
    return (
        <>
            <div>
                <h1>Date: {currentDay}</h1>   
                <h2>Current occupancy: {currOccupancy}%</h2>
                <h6>Current time: {currHour}:{currMin}{ampm}</h6>
            </div>  
        <Tabs defaultActiveKey={defaultDay}>
            <Tab eventKey="Monday" title="Monday">
                <Bar data={monChartData} options={{
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
            </Tab>
            <Tab eventKey="Tuesday" title="Tuesday">
                <Bar data={tuesChartData} options={{
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
            </Tab>
            <Tab eventKey="Wednesday" title="Wednesday">
                <Bar data={wedChartData} options={{
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
            </Tab>
            <Tab eventKey="Thursday" title="Thursday">
                <Bar data={thursChartData} options={{
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
            </Tab>
            <Tab eventKey="Friday" title="Friday">
                <Bar data={friChartData} options={{
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
            </Tab>
            <Tab eventKey="Saturday" title="Saturday">
                <Bar data={satChartData} options={{
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
            </Tab>
            <Tab eventKey="Sunday" title="Sunday">
                <Bar data={sunChartData} options={{
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
            </Tab>
        </Tabs>
        </>
    )
}

export default Week;
