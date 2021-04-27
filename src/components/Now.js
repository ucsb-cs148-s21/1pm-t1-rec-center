import React from 'react';
import axios from 'axios';

var params = {
    'venue_id': 'ven_5965782d62435251644858524159365f51575f357263394a496843',
    'api_key_public': 'pub_e7764657ade1430cb9990b81dd156525'
}

export default class Now extends React.Component {
    state = {
        times: 0,      
    };    

    componentDidMount() {
        axios.get("https://besttime.app/api/v1/forecasts/now/raw?" + new URLSearchParams(params)).then(res => {
            console.log(res);
            this.setState({times: res.data.analysis.hour_raw});
        })
    }

    render() {
        return <div>Current Occupancy Level: {this.state.times}</div>;
    }
}
