import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class PermNav extends Component {
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
                

                <nav className="perm-navbar">
                <ul className="perm-navbar-ul-elems">
                    <li>
                        <a href="/#/" className="perm-navbar-ul-elems-logo">
                            500.5px
                        </a>
                    </li>
                    <li>Discover</li>
                    <li>About</li>
                </ul>
                <ul className="perm-navbar-ul-elems perm-right-ul-elems">
                    <li>
                        <Link to="/login">log in</Link>

                    </li>
                    <li>
                    <Link to="/signup">sign up</Link>

                    </li>
                </ul>
               
                <br/>
                </nav>

            </div>
        )
    }


}