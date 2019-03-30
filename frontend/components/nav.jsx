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
                

                <nav className="navbar">
                <ul className="navbar-ul-elems">
                    <li>
                        <a href="/#/" className="navbar-ul-elems-logo">
                            500.5px
                        </a>
                    </li>
                    <li>Discover</li>
                    <li>About</li>
                </ul>
                <ul className="navbar-ul-elems right-ul-elems">
                    <li>
                        <Link to="/signup">sign up</Link>
                    </li>
                    <li>
                        <Link to="/login" className="splash-btn-nav">log in</Link>
                    </li>
                </ul>
               
                <br/>
                </nav>

            </div>
        )
    }


}