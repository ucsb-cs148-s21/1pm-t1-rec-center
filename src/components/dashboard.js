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


axios.get("https://besttime.app/api/v1/forecasts/week/raw2?" + new URLSearchParams(params)).then(res => {
        for(const dataObj of res.data.analysis.week_raw[0].day_raw){
            weekData.mondayData.push(parseInt(dataObj))
        }
        for(const dataObj of res.data.analysis.week_raw[1].day_raw){
            weekData.tuesdayData.push(parseInt(dataObj))
        }
        for(const dataObj of res.data.analysis.week_raw[2].day_raw){
            weekData.wednesdayData.push(parseInt(dataObj))
        }
        for(const dataObj of res.data.analysis.week_raw[3].day_raw){
            weekData.thursdayData.push(parseInt(dataObj))
        }
        for(const dataObj of res.data.analysis.week_raw[4].day_raw){
            weekData.fridayData.push(parseInt(dataObj))
        }
        for(const dataObj of res.data.analysis.week_raw[5].day_raw){
            weekData.saturdayData.push(parseInt(dataObj))
        }
        for(const dataObj of res.data.analysis.week_raw[6].day_raw){
            weekData.sundayData.push(parseInt(dataObj))
        }
    })
    .catch(err => {
        console.log(err)
    });
    console.log();



class Dashboard extends Component {
    state = {  
        days: [
            { id: 1, data: weekData.mondayData, doy: "Monday", colors: normal, colorBorders: normalBorders },
            { id: 2, data: weekData.tuesdayData, doy: "Tuesday", colors: normal, colorBorders: normalBorders },
            { id: 3, data: weekData.wednesdayData, doy: "Wednesday", colors: normal, colorBorders: normalBorders },
            { id: 4, data: weekData.thursdayData, doy: "Thursday", colors: normal, colorBorders: normalBorders },
            { id: 5, data: weekData.fridayData, doy: "Friday", colors: normal, colorBorders: normalBorders },
            { id: 6, data: weekData.saturdayData, doy: "Saturday", colors: normal, colorBorders: normalBorders },
            { id: 7, data: weekData.sundayData, doy: "Sunday", colors: normal, colorBorders: normalBorders }
        ]
    }

    render() { 
        return (  
        <Tabs className='Monitor'>
                <Tab eventKey={this.state.days[0].doy} title={this.state.days[0].doy}><Day key={this.state.days[0].id} day={this.state.days[0]}/></Tab>
                <Tab eventKey={this.state.days[1].doy} title={this.state.days[1].doy}><Day key={this.state.days[1].id} day={this.state.days[1]}/></Tab>
                <Tab eventKey={this.state.days[2].doy} title={this.state.days[2].doy}><Day key={this.state.days[2].id} day={this.state.days[2]}/></Tab>
                <Tab eventKey={this.state.days[3].doy} title={this.state.days[3].doy}><Day key={this.state.days[3].id} day={this.state.days[3]}/></Tab>
                <Tab eventKey={this.state.days[4].doy} title={this.state.days[4].doy}><Day key={this.state.days[4].id} day={this.state.days[4]}/></Tab>
                <Tab eventKey={this.state.days[5].doy} title={this.state.days[5].doy}><Day key={this.state.days[5].id} day={this.state.days[5]}/></Tab>
                <Tab eventKey={this.state.days[6].doy} title={this.state.days[6].doy}><Day key={this.state.days[6].id} day={this.state.days[6]}/></Tab>
        </Tabs> 
            );
    }
}
 
export default Dashboard;