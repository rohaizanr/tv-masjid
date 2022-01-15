import React, { Component } from 'react';

class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    
    render() {
        return (
            <div className="container-fluid bg-danger bg-gradient text-white position-absolute bottom-0 end-0">
                Scrolling announcement here
            </div>
        );
    }
}

export default Announcement;