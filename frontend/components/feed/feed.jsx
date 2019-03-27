import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

// library.add(faEnvelope, faKey);



export default class Feed extends Component {
    constructor(props) {
        super(props);
        
    }


    render() {

        return (
            <div>
                

                <nav className="perm-navbar">
                <ul className="perm-navbar-ul-elems">
                    <li>
                        <a href="/#/" className="perm-navbar-ul-elems-logo">
                            500.5px
                        </a>
                    </li>
                    <li>
                        <a href="">Discover</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                </ul>
                <ul className="perm-navbar-ul-elems perm-right-ul-elems">
                    <li>
                        <div className="dropdown">
                         
                         <img alt="avatar" className="icon-avatar" src="https://graph.facebook.com/v2.7/2368798293349642/picture?height=100&amp;width=100"></img>
                        <div className="dropdown-content">
                        <ul>
                            <li>
                        <a href="">My Profile</a>

                            </li>
                            <li>
                        <a href="">My Stats</a>

                            </li>
                            <li>
                        <a href="">My Galleries</a>

                            </li>
                            <li>
                        <a href="">My Liked Photos</a>

                            </li>
                        <p className="hline"></p>
                            <li>
                        <a href="">My Settings</a>

                            </li>
                            <li>
                        <a href="">Manage Photos</a>

                            </li>
                            <li>
                        <a href="">About</a>

                            </li>
                            <li>
                        <button>Log Out</button>

                            </li>
                        </ul>
                        </div>
                        </div>
                    </li>
                    <li >
                    
                    <a href="" className="nav-upload-icon">
                        <i class="fa fa-cloud-upload display-if" aria-hidden="true"></i>
                        <span>
                            Upload
                        </span>
                    </a>
                    </li>
                </ul>
               
                <br/>
                </nav>

                <div className="feed-cnt">
                    <div className="feed-txt">
                        <h1  >
                            What's popular today
                        </h1> 
                        <p  >
                            See recently added photos with the highest Pulse.
                        </p>
                    </div>
                </div>





            </div>
        )
    }


}