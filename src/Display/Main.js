import React, { Component } from "react";
import Bottom from './Bottom/Bottom';
import Middle from './Middle/Middle';
import Top from './Top/Top';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          }
        };

    render() {
        return(
            <div>
                <Top />
                <Middle />
                <Bottom />
            </div>
        );
    }
}

export default Main;