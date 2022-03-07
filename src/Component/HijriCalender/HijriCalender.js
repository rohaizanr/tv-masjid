import React, { Component } from 'react';
import momentHijri from 'moment-hijri';

class HijriCalender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hijriDate: momentHijri().format('iYYYY/iM/iD')
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
            hijriDate: momentHijri().format('iYYYY/iM/iD')
        });
    }
    
    render() {
        return (
            <div>
                {this.state.hijriDate}
            </div>
        );
    }
}

export default HijriCalender;