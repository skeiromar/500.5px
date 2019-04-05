import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_utils';
import Modal from '../modal/modal';
import PictureIndexItem from './picture_index_item';
import PictureDetailContainer from './picture_detail/picture_detail_container';

export default class Feed extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this
      .handleLogout
      .bind(this);
    this.pushProfilePage = this
      .pushProfilePage
      .bind(this);
    this.handleDiscover = this
      .handleDiscover
      .bind(this);
  }

  componentDidMount() {
    this
      .props
      .fetchPictures();
  }

  handleLogout() {
    this
      .props
      .logout();
  }
  pushProfilePage() {
    const {user} = this.props;

    this
      .props
      .history
      .push(`/profile/${user.id}`);
  }
  handleDiscover() {
    this
      .props
      .history
      .push('/feed/');
  }

  render() {
    // console.log(this.state);
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
              <a onClick={this.handleDiscover}>Discover</a>
            </li>
            <li>
              <a href="/#/about">About</a>
            </li>
          </ul>
          <ul className="perm-navbar-ul-elems perm-right-ul-elems">
            <li>
              <div className="dropdown">

                {this.props.user.pictureUrl
                  ? <img
                      src={`${this.props.user.pictureUrl}`}
                      onClick={this.pushProfilePage}
                      className="icon-avatar"/>
                  : null}
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
                      <a >About</a>

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
                <a className="active" >POPULAR</a>
              </li>
              <li>
                <a >UPCOMING</a>
              </li>
              <li>
                <a >FRESH</a>
              </li>
              <li>
                <a >EDITOR'S CHOICE</a>
              </li>
            </ul>
          </div>
          <p className="hline-feed"></p>

          <div></div>
          <div className="feed-flex-cnt">
            <ul className="feed-flex-img-cnt">
              {this
                .props
                .pictures
                .map((el, i) => <PictureIndexItem
                  key={i}
                  picture={el}
                  openModal={this.props.openModal}
                  numLikes={el.numLikes}
                  likerIds={el.likerIds}
                  history={this.props.history}/>)}
              
            </ul>

          </div>

        </div>

      </div>
    )
  }

}