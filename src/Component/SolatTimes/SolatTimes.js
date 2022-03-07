import React, { Component } from 'react';

class SolatTimes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            // <div className='container-fluid'>
                <div class="d-flex">
                    <div class="p-2 flex-fill"><h1>Imsak</h1><br/><h2>1:12PM</h2></div>
                    <div class="p-2 flex-fill"><h1>Subuh</h1><br/><h2>1:12PM</h2></div>
                    <div class="p-2 flex-fill"><h1>Syuruk</h1><br/><h2>1:12PM</h2></div>
                    <div class="p-2 flex-fill"><h1>Zohor</h1><br/><h2>1:12PM</h2></div>
                    <div class="p-2 flex-fill"><h1>Asar</h1><br/><h2>1:12PM</h2></div>
                    <div class="p-2 flex-fill"><h1>Maghrib</h1><br/><h2>1:12PM</h2></div>
                    <div class="p-2 flex-fill"><h1>Isyak</h1><br/><h2>1:12PM</h2></div>
                </div>
            // </div>
        );
    }
}

export default SolatTimes;