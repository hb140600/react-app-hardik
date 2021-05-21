import React, { Component } from 'react';
import "./Avator.css";
import 'tachyons';
import Avatorlist from './Avatorlist';



class Avator extends Component {
    constructor() {
        super();
        this.state = {
            name: "Welcome to Avator World"
        }
    }

    namechange() {
        this.setState({
            name: "Welcome to Hardik World"
        })
    }

    render() {
        const avatorlistarray = [
            {
                id: "1",
                name: "HARDIK",
                work: "Web Developer"
            },
            {
                id: "2",
                name: "SHIVANSH",
                work: "App Developer"
            },
            {
                id: "3",
                name: "SOHIL",
                work: "Front Developer"
            },
            {
                id: "4",
                name: "JATIN",
                work: "Backend Developer"
            },
        ]

        // Map(callback(currentvalue, index, array) arg)
        const arrayavatorcard = avatorlistarray.map((avatorcard, i) => {
            return <Avatorlist key={i} id={avatorlistarray[i].id}
                name={avatorlistarray[i].name}
                work={avatorlistarray[i].work} />
        })
        return (
            <div class="mainpage">
                <h1> {this.state.name} </h1>
                {
                    arrayavatorcard
                }
                <br />
                <button onClick={() => this.namechange()}>Click Me</button>
            </div>
        )
    }
}


export default Avator;
