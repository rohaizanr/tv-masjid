import React, { Component } from 'react';
import Marquee from "react-fast-marquee";
import { getAnnouncements } from '../../utils/applicationSettings'

class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text : this.getAnnouncementAsString()
        };
      }
    
    getAnnouncementAsString() {
        // var result = "";
        var temp = getAnnouncements();
        return temp.join(" ------------------------------------ ");
    }
    render() {
        return (
            <div className="container-fluid bg-danger bg-gradient text-white position-absolute bottom-0 end-0">
                <Marquee gradientColor="[255,0,0]" speed="100">
                    { this.state.text }
                </Marquee>
            </div>
        );
    }
}

export default Announcement;