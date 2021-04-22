import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

var d = new Date();
var n = d.getDay();

var params = {
    'venue_id': 'ven_5965782d62435251644858524159365f51575f357263394a496843',
    'api_key_public': 'pub_e7764657ade1430cb9990b81dd156525',
    'day_int': n
}


export default class Now extends React.Component {
    state = {
        times: [],      
    };    

    
    componentDidMount() {
        axios.get("https://besttime.app/api/v1/forecasts/day/raw?" + new URLSearchParams(params)).then(res => {
            console.log(res);
            this.setState({times: res.data.analysis.day_raw});
        })
    }
        

    render(){
        return <ul>{this.state.times.map(time => <li>{time}</li>)}</ul>;
    }    
}

// return <ul>{this.state.times.map(time => <li>{time}</li>)}</ul>;