import React, { Component } from 'react';
import { getMasjidName } from '../../utils/applicationSettings';

class MasjidName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : getMasjidName()
        };
      }

    render() {
        return (
            <div>
                <h3>{this.state.name}</h3>
            </div>
        );
    }
}

export default MasjidName;