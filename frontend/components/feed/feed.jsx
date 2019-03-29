import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey);



export default class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pics: '',
            picFile: null
        };
        this.listenScroll = this.listenScroll.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    requestPictures() {
        $.ajax({
            method: "GET",
            url: `api/pictures`,
        }).then(pics => {
            
            this.setState({pics: pics[1].pictureUrl});
        });
    }

    componentDidMount() {
        // this.requestPictures();
        this.props.fetchPictures();
        // console.log(this.state);
    }

    listenScroll() {

    }
    handleFile(e) {
        this.setState({picFile: e.currentTarget.files[0]});
    }
    handleSubmit(e) {
        e.preventDefault();
        // this.props.action(this.state);
        const formData = new FormData();
        formData.append("picture[title]", 'this is a test 2');
        formData.append("picture[description]", 'this is a test description 2');
        formData.append("picture[picture]", this.state.picFile);
        // formData.append("picture[author_id]", '8');
        return $.ajax({
            method: "POST",
            url: `api/pictures`,
            data: formData, 
            contentType: false,
            processData: false
        });
      }

    render() {  
        console.log(this.state);
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
                        <i className="fa fa-cloud-upload display-if" aria-hidden="true"></i>
                        <span>
                            <form onSubmit={this.handleSubmit}>
                            <input type="file" onChange={this.handleFile}/>
                            <input type="submit" value="submit"/>
                            </form>
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

                    
                <div className="feed-flex-cnt">

                    <div className="feed-photo-flex">
                        <div style={{backgroundImage: `url(${'https://picsum.photos/500/400/?random'})`}}>
                             <img src={this.state.pics} alt=""/> 
                             <img src='https://picsum.photos/500/400/?random'/>
                        </div>
                        <div>
                            <img src='https://picsum.photos/600/800/?random'/>
                        </div>
                        <div>
                            <img src='https://picsum.photos/700/400/?random'/>
                        </div>
                        <div>
                            <img src='https://picsum.photos/500/600/?random'/>
                        </div>
                        
                        <div>
                             <img src='https://picsum.photos/800/600/?random'/>
                        </div>
                        <div>
                            <img src='https://picsum.photos/400/700/?random'/>
                        </div>
                        <div>
                            <img src='https://picsum.photos/700/500/?random'/>
                        </div>
                        <div>
                            <img src='https://picsum.photos/500/400/?random'/>
                        </div>

                        <div>
                             <img src='https://picsum.photos/400/400/?random'/>
                        </div>
                        <div>
                            <img src='https://picsum.photos/600/700/?random'/>
                        </div>
                        <div>
                            <img src='https://picsum.photos/600/500/?random'/>
                        </div>
                        <div>
                            <img src='https://picsum.photos/500/600/?random'/>
                        </div>

                        <div>
                             <img src='https://picsum.photos/500/900/?random'/>
                        </div>
                        <div>
                            <img src='https://picsum.photos/400/600/?random'/>
                        </div>
                        <div>
                            <img src='https://picsum.photos/700/300/?random'/>
                        </div>
                        <div>
                            <img src='https://picsum.photos/500/500/?random'/>
                        </div>

                        <div>
                             <img src='https://picsum.photos/500/400/?random'/>
                        </div>
                        <div>
                            <img src='https://picsum.photos/600/800/?random'/>
                        </div>
                        <div>
                            <img src='https://picsum.photos/500/800/?random'/>
                        </div>
                       
                        <div>
                            <img src='https://picsum.photos/500/900/?random'/>
                        </div>

                    </div>
                </div>

                </div>

                



            </div>
        )
    }


}