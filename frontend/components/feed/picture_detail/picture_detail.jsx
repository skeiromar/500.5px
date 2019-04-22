import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CommentItem from '../comments/comment_item';
import isEmpty from 'lodash/isEmpty';

class PictureDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedTransition: false,
      like: 'black',
      liked: false,
      commentBody: '',
      comments: this.props.comments,
      follows: false,
      animation: '',
      hearted: 'heart',
      tHeight: 20,
      height: 'calc(100vh - 128px)',
      picHeight: '90',
      hover: false,
      picWidth: 95,



    };
    this.handleClick = this
      .handleClick
      .bind(this);
    this.handleClickPrev = this
      .handleClickPrev
      .bind(this);
    this.handleClickNext = this
      .handleClickNext
      .bind(this);
    this.hoverOn = this
      .hoverOn
      .bind(this);
    this.hoverOff = this
      .hoverOff
      .bind(this);
    this.handleLike = this
      .handleLike
      .bind(this);
    this.handleUnlike = this
      .handleUnlike
      .bind(this);
    this.handleEdit = this
      .handleEdit
      .bind(this);
    this.handleDelete = this
      .handleDelete
      .bind(this);
    this.handleCreateComment = this
      .handleCreateComment
      .bind(this);
    this.handleFollow = this
      .handleFollow
      .bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
      this.handleProfileRedirect = this.handleProfileRedirect.bind(this);
      this.heartAnimation = this.heartAnimation.bind(this);
      this.handleResize = this.handleResize.bind(this);
      this.onHover = this.onHover.bind(this);
      this.offHover = this.offHover.bind(this);
  }
  componentDidMount() {
    const {picture, user} = this.props;

    this
      .props
      .requestPicture(this.props.match.params.pictureId)
      .then(success => {
        this.setState({
        hearted: success
          .picture
          .likerIds
          .includes(user.id) ? 'hearted' : 'heart',
        follows: user
          .followedIds
          .includes(success.picture.author_id)
      });
      this
      .props
      .fetchAllComments(this.props.match.params.pictureId);
    });

    

  }

  handleCreateComment(e) {
    e.preventDefault();
    const {picture, user} = this.props;

    this.setState({commentBody: ''});
    if (this.state.commentBody.length > 0) {
      let comment = {
        picture_id: picture.id,
        author_id: user.id,
        body: this.state.commentBody,
        username: user.username,
        username_pic: user.pictureUrl
      };
      this
        .props
        .createComment(comment);
    }

  }
  onChange(type) {
    return (e) => {
      if (type === 'commentBody' && (this.state.commentBody.length+1) % 34 === 0) {
        this.setState({tHeight: this.state.tHeight + 25});
      } 
      this.setState({[type]: e.target.value});
    };
  }

  componentDidUpdate(prevProps) {
    const {picture, user} = this.props;

    if (prevProps.match.params.pictureId !== this.props.match.params.pictureId) {
      this
        .props
        .requestPicture(this.props.match.params.pictureId)
        .then(s => this.setState({
          hearted: s
            .picture
            .likerIds
            .includes(user.id) ? 'hearted' : 'heart',
          follows: user
            .followedIds
            .includes(s.picture.author_id)
        }));
      this
        .props
        .fetchAllComments(this.props.match.params.pictureId);
    }
  }
  handleClick() {
    this.setState({feedTransition: true});
    setTimeout(() => {

      this
        .props
        .history
        .push('/feed/');
    }, 300);
  }
  handleClickNext() {
    const {pictureIds, match} = this.props;
    if (isEmpty(pictureIds)) 
      return null;
    
    let indexInPicIds = pictureIds.indexOf(match.params.pictureId);

    let nextPage = pictureIds[indexInPicIds + 1];
    if (nextPage !== undefined) 
      this.props.history.push(`/pictures/${nextPage}`);

    }
  handleClickPrev() {
    const {pictureIds, match} = this.props;
    if (isEmpty(pictureIds)) 
      return null;
    let indexInPicIds = pictureIds.indexOf(match.params.pictureId);

    let prevPage = pictureIds[indexInPicIds - 1];
    if (prevPage !== undefined) 
      this.props.history.push(`/pictures/${prevPage}`);

    }
  hoverOn() {
    this.setState({like: 'red'});
  }
  hoverOff() {
    this.setState({like: 'black'});
  }
  handleLike() {

    this.setState({liked: true});

    this.props.createPictureLike({author_id: this.props.user.id, likable_id: this.props.picture.id})
    .then(() => this.setState({hearted: 'hearted'}));
  }
  handleUnlike() {
    const {user, picture} = this.props;

    this.setState({liked: false});
    this
      .props
      .deletePictureLike({author_id: user.id, likable_id: picture.id});
  }
  handleDelete() {
    const {picture, user} = this.props;
    // if (picture.author_id === user.id) {
    this
      .props
      .deletePicture(this.props.picture.id)
      .then(() => this.props.history.push('/feed'), null);
    // }
  }

  handleEdit() {
    // here be thy console.log('this works', this.props);
    this
      .props
      .history
      .push(`/pictures/${this.props.picture.id}/edit`);

  }

  handleFollow() {
    const {followUser, user, picture} = this.props;
    this.setState({follows: true});
    followUser({follower_id: user.id, followed_id: picture.author_id});

  }

  handleUnfollow() {
    const {unfollowUser, user, picture} = this.props;
    this.setState({follows: false});

    unfollowUser({follower_id: user.id, followed_id: picture.author_id});
  }

  handleProfileRedirect() {
    const {picture} = this.props;
    this.props.history.push(`/profile/${picture.author_id}`);
  }

  heartAnimation() {
    if (this.state.hearted === 'heart' && this.state.animation === '') {
      this.setState({animation: 'heart-is-animating'});
      this.handleLike()   
      setTimeout(() => {

        this.setState({animation: ''});   
      }, 600);
    } else if (this.state.hearted === 'hearted') {

        this.setState({hearted: 'heart'});   
        this.handleUnlike();
      }
    
  }

  handleResize() {
    if (this.state.height === 'calc(100vh)') {
      this.setState({height: 'calc(100vh - 128px)', picHeight: '90'});
    } else {
      this.setState({height: 'calc(100vh)', picHeight: '98'});
    }
  }

  onHover() {
    if (!this.state.hover && this.state.height === 'calc(100vh)') {
      this.setState({hover: true});
      setTimeout(() => {
        this.setState({hover: false});
      }, 6000);

    }
  }

  offHover() {
    
  }

  render() {

    const {picture, user, comments} = this.props;

    if (!picture) 
      return null;
    let cName = this.state.feedTransition
      ? 'pic-fade-out'
      : 'base';

    let isAuthor = picture.author_id === user.id ? '' : 'not-deletable';
    let hover = this.state.hover ? 'hover-state' : 'base-state';

    return (
      <section className={`picture-detail ${cName}`}>
        <ul className="pic-detail-img" style={{height: `${this.state.height}`}}
          onMouseMove={this.onHover}
          onMouseLeave={this.offHover} 
        >
          <li className="resize-pic-container" onClick={this.handleResize}> 
            <button className="resize-pic-btn">
            <i className="fas fa-expand resize-icon" />
            </button>
          </li>

          <li 
          className={`hover-detail-container ${hover}`}

          >
            {/* here */}
              <div className="profile-info-detail"
              >
                  {/* <i className="fas fa-plus"></i> */}
                  <img 
                  onClick={this.openProfile}
                  src={`${picture.authorProfilePicture}`} className="icon-avatar-pic-detail" />
                  <div className="pic-detail-info">
                    <p className="pic-icon-text-detail">{picture.title}</p>
                    <p className="pic-detail-user">
                    by {picture.author}
                    &nbsp;•&nbsp; {this.state.follows
                      ? <a onClick={this.handleUnfollow} className="follow-style-detail">Unfollow</a>
                      : <a onClick={this.handleFollow} className="follow-style-detail" >Follow</a>}
                  </p>
                                      
                  </div>

  

              </div>
              <div className="like-side-detail">

              <div 
              onClick={this.heartAnimation}
              className={`${this.state.hearted} ${this.state.animation}`}>
                  
              </div>
              <span id="likes-resize-detail">{this.props.picture.numLikes}</span>

              </div>

          </li>

          <li className="prev-pic-container" onClick={this.handleClickPrev}>
            <button className="prev-pic">
              <i className="fas fa-less-than"></i>
            </button>
          </li>
          <li className="next-pic-container" onClick={this.handleClickNext}>
            <button className="next-pic">
              <i className="fas fa-greater-than"></i>
            </button>
          </li>
          <li className="cross-container" onClick={this.handleClick}>
            <button >
              <i className="fas fa-times"></i>
            </button>
          </li>
          <li className="pic-container">
            <img src={`${picture.pictureUrl}`} className="pic-style" 
            style={{
              height: `${this.state.picHeight}%`,
              maxWidth: `${this.state.picWidth}%`
              }}/>
          </li>
        </ul>
        <div className="pic-content-container">
          <ul className="pic-content">
            <li className="pic-info">
              <div className="pic-likes">
                {/* <i className="far fa-heart fa-2x"></i> */}
                <div className="like-icon-container">

                  {/* {!this.state.liked
                    ? svgReg
                    : svgLiked} */}

                <div 
                onClick={this.heartAnimation}
                className={`${this.state.hearted} ${this.state.animation}`}>
                    
                </div>
                  <span id="like-icon-likes">{this.props.picture.numLikes} Likes</span>
                </div>
                <svg
                  
                  style={{cursor: 'pointer'}}
                  onClick={this.handleEdit}
                  className={`like-icon-edit ${isAuthor}`}
                  width="24px"
                  height="28px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink">

                  <defs>
                    <path
                      d="M3.90995992,16.0903633 L7.91963649,20.1000398 L18.428707,9.59096938 L14.4190304,5.5812928 L3.90995992,16.0903633 Z M3.3869141,17.5470318 L2.77170333,21.2382964 L6.46296795,20.6230857 L3.3869141,17.5470318 Z M8.02667114,21.7816474 L2.03526454,22.7802151 C1.56153382,22.8591703 1.1508295,22.4484659 1.22978462,21.9747352 L2.22835239,15.9833286 C2.2287653,15.9806457 2.22919383,15.9779647 2.22963799,15.9752858 C2.2536743,15.8313971 2.32201965,15.6985892 2.42517414,15.5954347 L16.0099073,2.01070154 C17.064176,0.956432857 18.7732321,0.956432857 19.8275007,2.01070154 L21.9992982,4.18249901 C23.0535669,5.23676769 23.0535669,6.9458238 21.9992982,8.00009248 L8.41456508,21.5848256 C8.31141059,21.6879801 8.17860264,21.7563254 8.03470505,21.7803084 L8.02667114,21.7816474 C7.81378483,21.8144113 7.58868635,21.7488041 7.4247079,21.5848256 L6.46296795,20.6230857 Z M15.4088876,4.59143562 L19.4185641,8.60111219 L21.009441,7.0102353 C21.5170267,6.50264964 21.5170267,5.67994185 21.009441,5.17235619 L18.8376436,3.00055873 C18.3300579,2.49297307 17.5073501,2.49297307 16.9997645,3.00055873 L15.4088876,4.59143562 Z"
                      id="path-1___DDQ0V4qe"/>
                  </defs>
                  <g
                    id="Icon/Very-Dark-Grey/Edit___DDQ0V4qe"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd">
                    <g id="01-Icon/Utility-Icon/_/Edit___DDQ0V4qe">
                      <mask id="mask-2___DDQ0V4qe" fill="white">
                        <use xlinkHref="#path-1___DDQ0V4qe"/>
                      </mask>
                      <use
                        id="Mask___DDQ0V4qe"
                        fill="#222222"
                        fillRule="nonzero"
                        xlinkHref="#path-1___DDQ0V4qe"/>
                      <g
                        className="inline_svg_icon__fill"
                        id="00-Mixin/Fill/01-Very-Dark-Grey___DDQ0V4qe"
                        mask="url(#mask-2___DDQ0V4qe)"
                        fill="#222222"
                        fillRule="evenodd">
                        <rect id="Box___DDQ0V4qe" x={0} y={0} width={24} height={24}/>
                      </g>
                    </g>
                  </g>
                </svg>
                <span
                className={`${isAuthor}`}
                >Edit Picture</span>
                
                <div className={`delete-pic`}>
                  <i className={`fas fa-trash-alt trash-pic ${isAuthor}`} style={{cursor: 'pointer'}} onClick={this.handleDelete}></i>
                  <span className={`${isAuthor}`}>Delete Picture</span>
                </div>
              </div>
              <div className="pic-title">

                <div>
                  <h3 className="h3-pic-title">{picture.title}</h3>
                  <p>
                    by {picture.author}
                    &nbsp;•&nbsp; {this.state.follows
                      ? <a onClick={this.handleUnfollow} className="follow-style">Unfollow</a>
                      : <a onClick={this.handleFollow} className="follow-style">Follow</a>
}
                  </p>

                </div>
                <div 
                onClick={this.handleProfileRedirect}
                className="profile-pic-container">
                  <img src={`${picture.authorProfilePicture}`} className="icon-avatar-detail"/>
                </div>
              </div>

              <div>
                <div>
                  <h3>Description:</h3>
                  <p className="pic-description">{`${picture.description}`}</p>
                </div>

                <div>
                  {/* here have tags and other picture detail */}
                </div>

              </div>

            </li>
            <li className="comment-content">

              <div>
                <h3 className="num-comment-style">
                  {comments.length}   Comments
                </h3>
                <div>
                  <div className="comment-style">

                    <div className="comment-icon-container">
                      <img src={`${user.pictureUrl}`} className="comment-icon-style"/>
                    </div>
                    <div className="comment-btn-text-cont">
                      <div className="comment-container">
                        <textarea
                          style={{height: `${this.state.tHeight}px`}}
                          className="comment-style-text"
                          onChange={this.onChange('commentBody')}
                          placeholder="Add a comment"
                          value={this.state.commentBody}></textarea>
                        <i className="far fa-comment comment-icon"></i>
                        {/* <div className="comment-icon"></div> */}
                      </div>

                      <div className="make-comment-container">
                        <a className="make-comment-cancel">
                          Cancel
                        </a>
                        <a className="make-comment" 
                        style={{cursor: 'pointer'}}                        
                        onClick={this.handleCreateComment}>
                          Comment
                        </a>
                      </div>
                    </div>
                  </div>
                  <div >
                    {comments.map((el, i) => <CommentItem
                      comment={el}
                      key={i}
                      createCommentLike={this.props.createCommentLike}
                      deleteCommentLike={this.props.deleteCommentLike}
                      deleteComment={this.props.deleteComment}
                      user={user}
                      history={this.props.history}
                      liked={el
                      .likerIds
                      .some(e => {
                        return e === user.id
                      }) ? 'hearted-comment' : 'heart-comment'}/>)}
 
                  </div>
                </div>
                <div></div>
              </div>

            </li>
          </ul>
        </div>

      </section>
    );
  }
}
export default PictureDetail;

