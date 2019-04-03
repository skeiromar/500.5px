import React, {Component} from 'react';
import PictureIndexItem from '../feed/picture_index_item';

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
    this.handleFollowers = this.handleFollowers.bind(this);
    this.handleFollowed = this.handleFollowed.bind(this);
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

    fetchFollowers(user.id).then(
        success => {
            
            this.props.openModal('open-followers-modal');
        }
    );
    // debugger

  }


  handleFollowed() {
    const {fetchFollowed, user} = this.props;

    fetchFollowed(user.id).then(
        success => {
            
            this.props.openModal('open-followers-modal');
        }
    );
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
              <a href="/#/" className="perm-navbar-ul-elems-logo-fixed">
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

        <div>

          <div className="top-profile">
            <div className="cover"
              onClick={() => this.props.openModal('changeBackground-Modal')}                          
            >
              <img 
              className="cover-img" 
              src={`${user.backgroundImg}`}/>
            </div>
            <div className="content">

              {this.state.follows
                ? <div className="button-unfollow" onClick={this.handleUnfollow}>
                    <a>
                      Unfollow
                    </a>
                    <a href="">
                      {/* more stuff */}
                    </a>
                  </div>
                : <div className="button-follow" onClick={this.handleFollow}>
                  <a>
                    Follow
                  </a>
                  <a href="">
                    {/* more stuff */}
                  </a>
                </div>
                }
            </div>
            <div className="profile-img-container">
              <img 
              onClick={() => this.props.openModal('changeProfile-Modal')}
              className="profile-picture" src={`${user.pictureUrl}`}/>

            </div>
            <div className="profilepage-info-container">
              <ul className="profilepage-info">
                <li>
                  {/* user name */}
                  <h2>{user.username}</h2>
                </li>
                <li>
                  {/* profile description */}
                  <h4>life is a like a box of chocolates</h4>
                </li>
              </ul>

              <ul className="follow-container">
                <li
                  className="followers"
                  onClick={this.handleFollowers}>
                  <span>
                    Followers {user.followerIds.length}
                  </span>
                </li>
                <li
                  className="followed"
                  onClick={this.handleFollowed}>
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

                <div className="feed-flex-item">
                  <img className="feed-flex-img" src='https://picsum.photos/500/900/?random'/>
                </div>
                <div className="feed-flex-item">
                  <img className="feed-flex-img" src='https://picsum.photos/500/300/?random'/>
                </div>
                <div className="feed-flex-item">
                  <img className="feed-flex-img" src='https://picsum.photos/300/200/?random'/>
                </div>
                <div className="feed-flex-item">
                  <img className="feed-flex-img" src='https://picsum.photos/500/700/?random'/>
                </div>
                <div className="feed-flex-item">
                  <img className="feed-flex-img" src='https://picsum.photos/500/500/?random'/>
                </div>
                <div className="feed-flex-item">
                  <img className="feed-flex-img" src='https://picsum.photos/600/800/?random'/>
                </div>
                <div className="feed-flex-item">
                  <img className="feed-flex-img" src='https://picsum.photos/700/400/?random'/>
                </div>
                <div className="feed-flex-item">
                  <img className="feed-flex-img" src='https://picsum.photos/200/600/?random'/>
                </div>
              </ul>

            </div>

          </div>

        </div>

      </div>
    )
  }
}

export default Profile;