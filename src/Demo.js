// import React, { Component } from 'react';
import './Demo.css';

const Demo = (props) => {
    return (
        <div className="maindiv-style">
            <h1>Hello World {props.name}!!!</h1>
            <p> Welcome to my website</p>
        </div>
    )
}
// class Demo extends Component {
//     render(props) {
//         return (
//             <div className="maindiv-style">
//                 <h1>Hello World {this.props.name}!!!</h1>
//                 <p> Welcome to my website</p>
//             </div>
//         )
//     }
// }

export default Demo;
