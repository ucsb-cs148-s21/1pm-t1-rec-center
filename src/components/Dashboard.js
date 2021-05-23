import { Tab, Tabs } from 'react-bootstrap';
import React, { Component } from 'react';
import Day from './Day';
import axios from 'axios';

const params = new URLSearchParams({ 
    'venue_id': 'ven_5965782d62435251644858524159365f51575f357263394a496843',
    'api_key_public': 'pub_8f98ec4cd25a4f62a7bd82f0722c15a8',
});

let weekData = {
    mondayData: [],
    tuesdayData:[],
    wednesdayData: [],
    thursdayData: [],
    fridayData: [],
    saturdayData: [],
    sundayData: []
}
var d = new Date();
let currentDay = new Date();
var chartIndex = (d.getHours() + 18) % 24;

let normal = ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)'];
let currColor = ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)'];
currColor[chartIndex] = 'rgba(255, 99, 132, 0.2)';
let normalBorders = ['rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)'];
let currColorBorders = ['rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)', 'rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)','rgba(54, 162, 235)'];
currColorBorders[chartIndex] = 'rgba(255, 99, 132)';



class Dashboard extends Component {

    state = {  
        days: [
            { id: 1, data: weekData.mondayData, dow: "Monday", colors: normal, colorBorders: normalBorders },
            { id: 2, data: weekData.tuesdayData, dow: "Tuesday", colors: normal, colorBorders: normalBorders },
            { id: 3, data: weekData.wednesdayData, dow: "Wednesday", colors: normal, colorBorders: normalBorders },
            { id: 4, data: weekData.thursdayData, dow: "Thursday", colors: normal, colorBorders: normalBorders },
            { id: 5, data: weekData.fridayData, dow: "Friday", colors: normal, colorBorders: normalBorders },
            { id: 6, data: weekData.saturdayData, dow: "Saturday", colors: normal, colorBorders: normalBorders },
            { id: 7, data: weekData.sundayData, dow: "Sunday", colors: normal, colorBorders: normalBorders }
        ],
        isLoading: true
    }

    componentDidMount() {
        console.debug("After mount! Let's load data from API...");
        axios.get("https://besttime.app/api/v1/forecasts/week/raw2?" + new URLSearchParams(params)).then(res => {
        for(const dataObj of res.data.analysis.week_raw[0].day_raw){
            this.state.days[0].data.push(parseInt(dataObj))
        }
        for(const dataObj of res.data.analysis.week_raw[1].day_raw){
            this.state.days[1].data.push(parseInt(dataObj))
        }
        for(const dataObj of res.data.analysis.week_raw[2].day_raw){
            this.state.days[2].data.push(parseInt(dataObj))
        }
        for(const dataObj of res.data.analysis.week_raw[3].day_raw){
            this.state.days[3].data.push(parseInt(dataObj))
        }
        for(const dataObj of res.data.analysis.week_raw[4].day_raw){
            this.state.days[4].data.push(parseInt(dataObj))
        }
        for(const dataObj of res.data.analysis.week_raw[5].day_raw){
            this.state.days[5].data.push(parseInt(dataObj))
        }
        for(const dataObj of res.data.analysis.week_raw[6].day_raw){
            this.state.days[6].data.push(parseInt(dataObj))
        }
        this.setState({ isLoading: false });

    })
    .catch(err => {
        console.log(err)
    });
    }

    render() {
        const { isLoading } = this.state.isLoading;
        console.log(this.state.days)
        if(isLoading){
            return <div>Loading...</div>;
        }
        return (  
        <div>
        <Tabs>
        { this.state.days.map((day) => 
                    <Tab key={day.id} eventKey={day.dow} title={day.dow}><Day key={day.id} day={day}/></Tab>)} 
        </Tabs> 
        </div>
            );
    }
}
 
export default Dashboard;