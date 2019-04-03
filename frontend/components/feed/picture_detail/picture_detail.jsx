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
      follows: false
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
    this.handleUnfollow = this
      .handleUnfollow
      .bind(this);

    this.handleProfileRedirect = this.handleProfileRedirect.bind(this);

  }
  componentDidMount() {
    const {picture, user} = this.props;

    this
      .props
      .requestPicture(this.props.match.params.pictureId)
      .then(s => {
        this.setState({
        liked: s
          .picture
          .ids
          .includes(user.id),
        follows: user
          .followedIds
          .includes(s.picture.author_id)
      });
    });

    this
      .props
      .fetchAllComments(this.props.match.params.pictureId);

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
          liked: s
            .picture
            .ids
            .includes(user.id),
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

    this
      .props
      .createLike({author_id: this.props.user.id, likable_id: this.props.picture.id, likable_type: 'Picture'});
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

  render() {

    const {picture, user, comments} = this.props;

    if (!picture) 
      return null;
    let cName = this.state.feedTransition
      ? 'pic-fade-out'
      : 'base';

    let svgReg = (
      <svg
        className="like-icon"
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
        onClick={this.handleLike}
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <path
            d="M11.928876,4.6480912 L12.268427,4.08281926 C13.4186334,2.16799854 15.4502756,1.00047365 17.640319,1.00047365 C20.9665079,1.00047365 23.6115335,3.72719604 23.952284,7.46069537 C24.0524883,8.09583562 23.989822,8.95324869 23.7520608,9.95403891 C23.2561658,12.0442247 22.1102297,13.9438554 20.4356532,15.4532147 L11.9291005,23 L11.5587201,22.6657451 L3.56335709,15.4502177 C1.89207231,13.9442591 0.745805889,12.0443377 0.249864075,9.95441177 C0.0120791844,8.95320548 -0.0509420637,8.09022324 0.0393524413,7.54691523 C0.389542516,3.73723479 3.02636199,1 6.36151742,1 C8.51703851,1 10.4575214,2.14427858 11.5948462,4.07967088 L11.928876,4.6480912 Z M11.935454,21.4750856 L19.6923785,14.5933728 C21.1939099,13.2399645 22.216764,11.544368 22.657827,9.68529788 C22.8629005,8.82209743 22.9146912,8.11348627 22.843875,7.67089565 L22.8335753,7.58638408 C22.5422299,4.39738972 20.3577125,2.14539935 17.640319,2.14539935 C15.8438074,2.14539935 14.1754415,3.10416003 13.2290188,4.67972935 L11.9183033,6.86175965 L10.6285982,4.66706093 C9.692462,3.07403263 8.11687011,2.1449257 6.36151742,2.1449257 C3.63696721,2.1449257 1.45864191,4.40620594 1.15496645,7.69411485 C1.08707312,8.10935089 1.13917743,8.82284185 1.34410083,9.68568309 C1.785178,11.5444063 2.80832786,13.2402637 4.31014954,14.593523 L11.935454,21.4750856 Z"
            id="path-1___wCMwVYuq"/>
        </defs>
        <g
          id="Icon/Very-Dark-Grey/Like---Outline___wCMwVYuq"
          stroke="none"
          strokeWidth={1}
          fill="none"
          fillRule="evenodd">
          <g id="01-Icon/Utility-Icon/_/Like---Outline___wCMwVYuq">
            <mask id="mask-2___wCMwVYuq" fill="white">
              <use xlinkHref="#path-1___wCMwVYuq"/>
            </mask>
            <use
              id="Mask___wCMwVYuq"
              fill={this.state.like}
              fillRule="zero"
              xlinkHref="#path-1___wCMwVYuq"/>
            <g
              className="inline_svg_icon__fill"
              id="00-Mixin/Fill/01-Very-Dark-Grey___wCMwVYuq"
              mask="url(#mask-2___wCMwVYuq)"
              fill="#222222"
              fillRule="evenodd">
              <rect id="Box___wCMwVYuq" x={0} y={0} width={24} height={24}/>
            </g>
          </g>
        </g>
      </svg>
    );

    let svgLiked = (
      <svg
        className="like-icon"
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
        onClick={this.handleUnlike}
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">

        <defs>
          <path
            d="M11.928876,4.6480912 L12.268427,4.08281926 C13.4186334,2.16799854 15.4502756,1.00047365 17.640319,1.00047365 C20.9665079,1.00047365 23.6115335,3.72719604 23.952284,7.46069537 C24.0524883,8.09583562 23.989822,8.95324869 23.7520608,9.95403891 C23.2561658,12.0442247 22.1102297,13.9438554 20.4356532,15.4532147 L11.9291005,23 L11.5587201,22.6657451 L3.56335709,15.4502177 C1.89207231,13.9442591 0.745805889,12.0443377 0.249864075,9.95441177 C0.0120791844,8.95320548 -0.0509420637,8.09022324 0.0393524413,7.54691523 C0.389542516,3.73723479 3.02636199,1 6.36151742,1 C8.51703851,1 10.4575214,2.14427858 11.5948462,4.07967088 L11.928876,4.6480912 Z"
            id="path-1___mMfJpL2P"/>
        </defs>
        <g
          id="Icon---Like---Filled___mMfJpL2P"
          stroke="none"
          strokeWidth={1}
          fill="none"
          fillRule="evenodd">
          <g id="01-Icon/Utility-Icon/_/Like---Filled___mMfJpL2P">
            <mask id="mask-2___mMfJpL2P" fill="white">
              <use xlinkHref="#path-1___mMfJpL2P"/>
            </mask>
            <use
              id="Mask___mMfJpL2P"
              fill="#000000"
              fillRule="nonzero"
              xlinkHref="#path-1___mMfJpL2P"/>
            <g
              id="00-Mixin/Fill/Raspberry-Red___mMfJpL2P"
              mask="url(#mask-2___mMfJpL2P)"
              fill="#C22B3F"
              fillRule="evenodd">
              <rect id="Box___mMfJpL2P" x={0} y={0} width={24} height={24}/>
            </g>
          </g>
        </g>
      </svg>
    );

    return (
      <section className={`picture-detail ${cName}`}>
        <ul className="pic-detail-img">
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
            <img src={`${picture.pictureUrl}`} className="pic-style"/>
          </li>
        </ul>
        <div className="pic-content-container">
          <ul className="pic-content">
            <li className="pic-info">
              <div className="pic-likes">
                {/* <i className="far fa-heart fa-2x"></i> */}
                <div className="like-icon-container">

                  {!this.state.liked
                    ? svgReg
                    : svgLiked}

                  <span id="like-icon-likes">{this.props.picture.numLikes}   Likes</span>
                </div>

                <svg
                  onClick={this.handleEdit}
                  className="like-icon-edit"
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
                <span>Edit Picture</span>
                <div className="delete-pic">
                  <i className="fas fa-trash-alt trash-pic" onClick={this.handleDelete}></i>
                  <span>Delete Picture</span>
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
                  <img src="https://i.imgur.com/cx9qaS3.jpg" width="508" height="378"/>
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
                        <a className="make-comment" onClick={this.handleCreateComment}>
                          Comment
                        </a>
                      </div>
                    </div>
                  </div>
                  <div >
                    {comments.map((el, i) => <CommentItem
                      comment={el}
                      key={i}
                      createLike={this.props.createLike}
                      deleteCommentLike={this.props.deleteCommentLike}
                      deleteComment={this.props.deleteComment}
                      user={user}
                      liked={el
                      .likerIds
                      .some(e => {
                        return e === user.id
                      })}/>)}

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

// clock Icon

{/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={24} height={24} viewBox="0 0 24 24">
<defs>
  <path id="a___5AaFimna" d="M12 0c6.601 0 12 5.399 12 12s-5.399 12-12 12S0 18.601 0 12 5.399 0 12 0zm0 .96C5.93.96.96 5.93.96 12c0 6.07 4.97 11.04 11.04 11.04 6.07 0 11.04-4.97 11.04-11.04C23.04 5.93 18.07.96 12 .96zm0 21.12c5.59 0 10.08-4.49 10.08-10.08S17.59 1.92 12 1.92A10.05 10.05 0 0 0 1.92 12c0 5.59 4.49 10.08 10.08 10.08zm0 .96A11.01 11.01 0 0 1 .96 12 11.01 11.01 0 0 1 12 .96 11.01 11.01 0 0 1 23.04 12 11.01 11.01 0 0 1 12 23.04zm-.48-19.104a.48.48 0 0 1 .48-.48h.96a.48.48 0 0 1 .48.48v9.024a.48.48 0 0 1-.48.48H7.488a.48.48 0 0 1-.48-.48V12a.48.48 0 0 1 .48-.48h4.032V3.936z" />
</defs>
<g fill="none" fillRule="evenodd">
  <mask id="b___5AaFimna" fill="#fff">
    <use xlinkHref="#a___5AaFimna" />
  </mask>
  <use fill="#000" fillRule="nonzero" xlinkHref="#a___5AaFimna" />
  <g className="inline_svg_icon__fill" fill="#222" mask="url(#b___5AaFimna)">
    <path d="M0 0h24v24H0z" />
  </g>
</g>
</svg> */
}