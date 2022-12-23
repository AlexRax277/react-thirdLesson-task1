import React from "react";
import './Stars.css'
import {v4 as uuid} from 'uuid';
import Star from "./Star.js";

class Stars extends React.Component {
    constructor(count) {
        super();
        this.count = count;
    }

    foo(unit) {
        let myList = [];
        const count = Number(this.count.count)
        while (myList.length < count) {
            myList.push(unit);
        }
        myList.map(el => {return(<li key={ uuid() }>{ el }</li>)})
        if (count < 1 || count > 5) {
            return <div></div>;
        } else {
            return myList;
        }
        
    }

    render() {
        return (
            <ul className="card-body-stars u-clearfix">
                { this.foo(<Star />) }
                { console.log(this.count) }
            </ul>
        );
    }
}

Stars.defaultProps = {
    count: 0
};

export default Stars;
