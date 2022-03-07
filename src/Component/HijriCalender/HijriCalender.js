import React, { Component } from 'react';
import momentHijri from 'moment-hijri';

class HijriCalender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hijriDate: momentHijri().format('iYYYY/iM/iD'),
            date: new Date().toLocaleDateString()
        }
      }

      componentDidMount() {
        this.intervalID = setInterval(() =>
            this.updateCalender(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    updateCalender() {
        this.setState({
            hijriDate: momentHijri().format('iYYYY/iM/iD'),
            date: new Date().toLocaleDateString()
        });
    }
    
    render() {
        return (
            <div>
                <pre>
                {this.state.date}
                <br />
                {this.state.hijriDate}
                </pre>
            </div>
        );
    }
}

export default HijriCalender;