import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_utils';
import Modal from '../modal/modal';
import PictureIndexItem from './picture_index_item';
import PictureDetailContainer from './picture_detail/picture_detail_container';

export default class Feed extends Component {
    constructor(props) {
        super(props);
        
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        this.props.fetchPictures();
    }
    handleLogout() {
        this.props.logout();
    }

    render() {  
        // console.log(this.state);
        return (
            <div>
                <Modal />
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
                         
                         <img src={`${this.props.user.pictureUrl}`} className="icon-avatar"/>
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
                        <button onClick={this.handleLogout}>Log Out</button>

                            </li>
                        </ul>
                        </div>
                        </div>
                    </li>
                    <li >
                    <a className="nav-upload-icon" onClick={this.props.openModal}>
                        <i className="fas fa-cloud-upload-alt cloud-margin-right"></i>
                        <span>
                            <button >upload</button>
                        
                        </span>
                    </a>
                    </li>
                </ul>
               
                <br/>
                </nav>


                <div className="feed-cnt">
                    
                    <div className="feed-txt">
                        <h1>
                            What's popular today
                        </h1> 
                        <p>
                            See recently added photos with the highest Pulse.
                        </p>
                    </div>

                    <div className="feed-tabs">
                        <ul className="feed-tabs-ul">
                            <li >
                                <a className="active" href="">POPULAR</a>
                            </li>
                            <li>
                                <a href="">UPCOMING</a>
                            </li>
                            <li>
                                <a href="">FRESH</a>
                            </li>
                            <li>
                                <a href="">EDITOR'S CHOICE</a>
                            </li>
                        </ul>
                    </div>
                        <p className="hline-feed"></p>
                
                <div>

                </div>
                <div className="feed-flex-cnt">
                    <ul className="feed-flex-img-cnt">
                        {this.props.pictures.map((el, i) => <PictureIndexItem 
                        key={i} 
                        picture={el}
                        openModal={this.props.openModal}
                        />)}                    
                        <div  className="feed-flex-item">
                            <img className="feed-flex-img" 
                            src='https://picsum.photos/500/900/?random'/>
                        </div>
                        <div className="feed-flex-item">
                            <img className="feed-flex-img" 
                            src='https://picsum.photos/500/300/?random'/>
                        </div>
                        <div className="feed-flex-item">
                            <img className="feed-flex-img" 
                            src='https://picsum.photos/300/200/?random'/>
                        </div>
                        <div className="feed-flex-item">
                            <img className="feed-flex-img" 
                            src='https://picsum.photos/500/700/?random'/>
                        </div>
                        <div  className="feed-flex-item">
                            <img className="feed-flex-img" 
                            src='https://picsum.photos/500/500/?random'/>
                        </div>
                        <div className="feed-flex-item">
                            <img className="feed-flex-img" 
                            src='https://picsum.photos/600/800/?random'/>
                        </div>
                        <div className="feed-flex-item">
                            <img className="feed-flex-img" 
                            src='https://picsum.photos/700/400/?random'/>
                        </div>
                        <div className="feed-flex-item">
                            <img className="feed-flex-img" 
                            src='https://picsum.photos/200/600/?random'/>
                        </div>
                    </ul>

                    
                </div>

                </div>

            </div>
        )
    }


}