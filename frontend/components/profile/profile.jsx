import React, {Component} from 'react';
import PictureIndexItem from '../feed/picture_index_item';
import Navbar from '../feed/Navbar';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      follows: false
    };

    this.pushProfilePage = this
      .pushProfilePage
      .bind(this);
    this.handleFollow = this
      .handleFollow
      .bind(this);
    this.handleUnfollow = this
      .handleUnfollow
      .bind(this);
    this.pushProfilePage = this
      .pushProfilePage
      .bind(this);
    this.handleFollowers = this
      .handleFollowers
      .bind(this);
    this.handleFollowed = this
      .handleFollowed
      .bind(this);
    this.handleDiscover = this
      .handleDiscover
      .bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    const {fetchUserPictures, fetchUser, user, currentUser} = this.props;

    fetchUserPictures(this.props.match.params.userId);
    fetchUser(this.props.match.params.userId).then(s => this.setState({
      follows: currentUser
        .followedIds
        .includes(s.user.id)
    }));
    
  }

  componentDidUpdate(prevProps) {
    const {fetchUserPictures, fetchUser, user, currentUser} = this.props;

    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      fetchUserPictures(this.props.match.params.userId);
      fetchUser(this.props.match.params.userId).then(s => this.setState({
        follows: currentUser
          .followedIds
          .includes(s.user.id)
      }));
    }
  }

  pushProfilePage() {
    const {currentUser} = this.props;

    this
      .props
      .history
      .push(`/profile/${currentUser.id}`);
  }

  handleFollow() {
    const {followUser, user, currentUser} = this.props;
    this.setState({follows: true});

    followUser({follower_id: currentUser.id, followed_id: user.id});

  }

  handleUnfollow() {
    const {unfollowUser, user, currentUser} = this.props;

    this.setState({follows: false});

    unfollowUser({follower_id: currentUser.id, followed_id: user.id});
  }
  handleFollowers() {
    const {fetchFollowers, user} = this.props;

    fetchFollowers(user.id).then(success => {

      this
        .props
        .openModal('open-followers-modal');
    });
    // debugger

  }

  handleFollowed() {
    const {fetchFollowed, user} = this.props;

    fetchFollowed(user.id).then(success => {

      this
        .props
        .openModal('open-followers-modal');
    });
  }

  handleDiscover() {
    this
      .props
      .history
      .push('/feed/');
  }
  handleLogout() {
    this
      .props
      .logout();
  }

  render() {

    const {user} = this.props;
    if (!user) 
      return null;
    return (
      <div>

        <nav className="fixed-nav">
          <ul className="perm-navbar-ul-elems-fixed">
            <li>
              <a href="/#/" className="perm-navbar-ul-elems-logo-fixed" style={{cursor: 'pointer'}}>
                500.5px
              </a>
            </li>
            <li className="profile-nav-stuff">
              <a onClick={this.handleDiscover} style={{cursor: 'pointer'}}>Discover</a>
            </li>
            <li className="profile-nav-stuff">
              <a style={{cursor: 'pointer'}} href="https://skeiromar.github.io/My-Portfolio-Site/">About</a>
            </li>
          </ul>
          <ul className="perm-navbar-ul-elems perm-right-ul-elems-fixed">
            <li>
              <div className="dropdown">

                {this.props.currentUser.pictureUrl
                  ? <img
                      src={`${this.props.currentUser.pictureUrl}`}
                      onClick={this.pushProfilePage}
                      className="icon-avatar"/>
                  : null}
                <div className="dropdown-content">
                  <ul>
                    {/* <li>
                      <a href="/#/coming">My Stats</a>

                    </li>
                    <li>
                      <a href="/#/coming">My Galleries</a>

                    </li>
                    <li>
                      <a href="/#/coming">My Liked Photos</a>

                    </li>
                    <p className="hline"></p>
                    <li>
                      <a href="/#/coming">My Settings</a>

                    </li>
                    <li>
                      <a href="/#/coming">Manage Photos</a>

                    </li> */}
                    <li>
                      <a href="https://skeiromar.github.io/My-Portfolio-Site/">About</a>

                    </li>
                    <li>
                      <button 
                      id="btn-prof"
                      onClick={this.handleLogout} style={{cursor: 'pointer'}}>Log Out</button>

                    </li>

                  </ul>

                </div>
              </div>
            </li>
 
          </ul>

          <br/>
        </nav>

        <div>

          <div className="top-profile">
          {this.props.currentUser.id === this.props.user.id ? 
            <div
              
              className="cover"
              style={{cursor: 'pointer'}}
              onClick={() => this.props.openModal('changeBackground-Modal')}>
              <img className="cover-img-editable" src={`${user.backgroundImg}`} />
            </div>
            : 
            <div
              className="cover"
              >
              <img className="cover-img" src={`${user.backgroundImg}`} />
            </div>
          }
           

            <div className="content">
              {this.state.follows
                ? <div className="button-unfollow" onClick={this.handleUnfollow} style={{cursor: 'pointer'}}>
                    <a style={{cursor: 'pointer'}}>
                      Unfollow
                    </a>
                    <a href="">
                      {/* more stuff */}
                    </a>
                  </div>
                : <div className="button-follow" onClick={this.handleFollow} style={{cursor: 'pointer'}}>
                  <a style={{cursor: 'pointer'}}>
                    Follow
                  </a>
                  <a href="">
                    {/* more stuff */}
                  </a>
                </div>
}
            </div>
            {this.props.currentUser.id === this.props.user.id ? 
            <div 
            style={{cursor: 'pointer'}}
            className="profile-img-container">
              <img
                onClick={() => this.props.openModal('changeProfile-Modal')}
                className="profile-picture-editable"
                src={`${user.pictureUrl}`}/>

            </div>
            : 
            <div 
            
            className="profile-img-container">
              <img
                className="profile-picture"
                src={`${user.pictureUrl}`}/>

            </div>
            }
            <div className="profilepage-info-container">
              <ul className="profilepage-info">
                <li>
                  {/* user name */}
                  <h2>{user.username}</h2>
                </li>
                <li>
                  {/* profile description */}
          
                </li>
              </ul>

              <ul className="follow-container">
                <li className="followers" onClick={this.handleFollowers}>
                  <span>
                    Followers {user.followerIds.length}
                  </span>
                </li>
                <li className="followed" onClick={this.handleFollowed}>
                  <span>
                    Followed {user.followedIds.length}
                  </span>
                </li>
              </ul>

            </div>

          </div>
          <div className="profile-gallery-container">

            <div className="feed-flex-cnt">
              <ul className="feed-flex-img-cnt">
                {this
                  .props
                  .pictures
                  .map((el, i) => <PictureIndexItem
                    key={i}
                    picture={el}
                    numLikes={el.numLikes}
                    likerIds={el.likerIds}/>)}

              
              </ul>

            </div>

          </div>

        </div>

      </div>
    )
  }
}

export default Profile;