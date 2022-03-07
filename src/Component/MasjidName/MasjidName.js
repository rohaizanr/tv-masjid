import React, { Component } from 'react';

class MasjidName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "Masjid Jamek Sungai Rambai"
        };
      }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
            </div>
        );
    }
}

export default MasjidName;