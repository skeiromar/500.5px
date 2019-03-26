import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Greeting extends Component {
    constructor(props) {
        super(props);
        
    }


    render() {

        return this.props.currentUser ? (

            <div>
                <h1>Welcome, {this.props.currentUser.username}</h1>
                <button onClick={this.props.logout}>Log Out</button>
            </div>

        ) : (
            <div>
                <Link to="/signup">sign up</Link>
                <br/>
                    <Link to="/login">log in</Link>
            </div>
        )
    }


}