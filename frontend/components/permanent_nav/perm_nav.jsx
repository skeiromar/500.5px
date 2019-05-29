import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class PermNav extends Component {
    constructor(props) {
        super(props);
        
    }


    render() {

        return (
            <div>
                

                <nav className="perm-navbar">
                <ul className="perm-navbar-ul-elems">
                    <li>
                        <a href="/#/" className="perm-navbar-ul-elems-logo" style={{cursor: 'pointer'}}>
                            500.5px
                        </a>
                    </li>
                    <li>
                        <a href="https://skeiromar.github.io/My-Portfolio-Site/" style={{cursor: 'pointer'}}>About</a>
                    </li>
                </ul>
                <ul className="perm-navbar-ul-elems perm-right-ul-elems">
                    <li>
                        <Link to="/login" style={{cursor: 'pointer'}}>log in</Link>

                    </li>
                    <li>
                    <Link to="/signup" style={{cursor: 'pointer'}}>sign up</Link>

                    </li>
                </ul>
               
                <br/>
                </nav>

            </div>
        )
    }


}