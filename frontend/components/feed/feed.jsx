import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_utils';
import Modal from '../modal/modal';
import PictureIndexItem from './picture_index_item';
import PictureDetailContainer from './picture_detail/picture_detail_container';
import Navbar from './Navbar';

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
         <Navbar 
          handleDiscover={this.handleDiscover}
          user={this.props.user}
          pushProfilePage={this.pushProfilePage}
          handleLogout={this.handleLogout}
          openModal={this.props.openModal}
        />


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
            {/* <ul className="feed-tabs-ul">
              <li >
                <a className="active" href="/#/coming">POPULAR</a>
              </li>
              <li>
                <a href="/#/coming">UPCOMING</a>
              </li>
              <li>
                <a href="/#/coming">FRESH</a>
              </li>
              <li>
                <a href="/#/coming">EDITOR'S CHOICE</a>
              </li>
            </ul> */}
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