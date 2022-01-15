import React, { Component } from 'react';

class Waktu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          prayerTimes: this.getPrayerTimes()
        };
      }
      
    render() {
        return <h1>{this.props.name}</h1>;
    }
}

export default Waktu;