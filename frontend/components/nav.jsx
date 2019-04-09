import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Button from '../components/ui_components/button';

export default class Greeting extends Component {
    constructor(props) {
        super(props);
        
    }


    render() {

        return (
            <div>
                

                <nav className="navbar">
                <ul className="navbar-ul-elems">
                    <li>
                        <a href="/#/" className="navbar-ul-elems-logo" style={{cursor: 'pointer'}}>
                            500.5px
                        </a>
                    </li>
                    <Link
                    to="/feed/"
                    >

                    <li style={{cursor: 'pointer'}}>
                        Discover
                    </li>
                    </Link>
                    <li >
                    
                    <Link to="/about" style={{cursor: 'pointer'}}>
                    About
                    </Link>
                    
                    </li>

                </ul>
                <ul className="navbar-ul-elems right-ul-elems">
                    <li>
                        <Link 
                        id="sign-up-cursor"
                        to="/login">log in</Link>
                    </li>
                    <li>
                        <Link to="/signup" className="splash-btn-nav">
                        sign up</Link>
                    </li>
                </ul>
               
                <br/>
                </nav>

            </div>
        )
    }


}