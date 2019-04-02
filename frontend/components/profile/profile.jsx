import React, { Component } from 'react';

class Profile extends Component {
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
                        
                    {/* {this.props.user.pictureUrl ? <img src={`${this.props.user.pictureUrl}`} 
                    onClick={this.pushProfilePage}
                    className="icon-avatar"/> : null }  */}
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
                {/* <a className="nav-upload-icon" onClick={this.props.openModal}>
                    <i className="fas fa-cloud-upload-alt cloud-margin-right"></i>
                    <span>
                        <button >upload</button>
                    
                    </span>
                </a> */}
                </li>
            </ul>
            
            <br/>
        </nav>


                



      </div>
    )
  }
}

export default Profile;