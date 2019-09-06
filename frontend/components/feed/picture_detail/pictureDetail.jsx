import React, {useState, useEffect} from 'react';
import CommentItem from '../comments/comment_item';
import isEmpty from 'lodash/isEmpty';

function PictureDetail(props) {
    const [state, setState] = useState({
        feedTransition: false,
        like: 'black',
        liked: false,
        commentBody: '',
        comments: props.comments,
        follows: false,
        animation: '',
        hearted: 'heart',
        tHeight: 20,
        height: 'calc(100vh - 128px)',
        picHeight: '90',
        hover: false,
        picWidth: 95,
    });
    
    useEffect(() => {
        const {user} = props;

        props
            .requestPicture(props.match.params.pictureId)
            .then(success => {
                setState({
                    ...state,
                    hearted: success
                      .picture
                      .likerIds
                      .includes(user.id) ? 'hearted' : 'heart',
                    follows: user
                      .followedIds
                      .includes(success.picture.author_id)
                });
                props
                    .fetchAllComments(props.match.params.pictureId);
            });
    }, []);

    useEffect(() => {
        return () => {
            
        };
    }, []);

    function handleCreateComment(e) {
        e.preventDefault();
        const {picture, user} = props;
    
        setState({...state, commentBody: ''});
        if (state.commentBody.length > 0) {
          let comment = {
            picture_id: picture.id,
            author_id: user.id,
            body: state.commentBody,
            username: user.username,
            username_pic: user.pictureUrl
          };
            props
            .createComment(comment);
        }
    
    }
    function onChange(type) {
        return (e) => {
          if (type === 'commentBody' && (state.commentBody.length+1) % 34 === 0) {
            setState({...state, tHeight: state.tHeight + 25});
          } 
          setState({...state, [type]: e.target.value});
        };
    }

    function handleClick() {
        setState({...state, feedTransition: true}, () => setTimeout(() => {
    
        props
            .history
            .push('/feed/');
        }, 400));
        
    }
    
    function handleClickNext() {
        const {pictureIds, match} = props;
        if (isEmpty(pictureIds)) 
            return null;
        
        let indexInPicIds = pictureIds.indexOf(match.params.pictureId);

        let nextPage = pictureIds[indexInPicIds - 1];
        if (nextPage !== undefined) 
            props.history.push(`/pictures/${nextPage}`);
    }
    function handleClickPrev() {
        const {pictureIds, match} = props;
        if (isEmpty(pictureIds)) 
            return null;
        let indexInPicIds = pictureIds.indexOf(match.params.pictureId);

        let prevPage = pictureIds[indexInPicIds + 1];
        if (prevPage !== undefined) 
            props.history.push(`/pictures/${prevPage}`);

    }
    function hoverOn() {
        setState({...state, like: 'red'});
    }
    function hoverOff() {
        setState({...state, like: 'black'});
    }
    function handleLike() {

        setState({...state, liked: true});

        props.createPictureLike({author_id: props.user.id, likable_id: props.picture.id})
        .then(() => setState({...state, hearted: 'hearted'}));
    }
    function handleUnlike() {
        const {user, picture} = props;

        setState({...state, liked: false});
            props
            .deletePictureLike({author_id: user.id, likable_id: picture.id});
    }
    function handleDelete() {
        const {picture, user} = props;
        // if (picture.author_id === user.id) {
        props
            .deletePicture(props.picture.id)
            .then(() => props.history.push('/feed'), null);
        // }
    }

    function handleEdit() {
    // here be thy console.log('works', props);
        props
        .history
        .push(`/pictures/${props.picture.id}/edit`);

    }

    function handleFollow() {
        const {followUser, user, picture} = props;
        setState({...state, follows: true});
        followUser({follower_id: user.id, followed_id: picture.author_id});

    }

    function handleUnfollow() {
    const {unfollowUser, user, picture} = props;
    setState({...state, follows: false});

    unfollowUser({follower_id: user.id, followed_id: picture.author_id});
    }

    function handleProfileRedirect() {
    const {picture} = props;
    props.history.push(`/profile/${picture.author_id}`);
    }

    function heartAnimation() {
    if (state.hearted === 'heart' && state.animation === '') {
        setState({...state, animation: 'heart-is-animating'});
        handleLike()   
        setTimeout(() => {

        setState({...state, animation: ''});   
        }, 600);
    } else if (state.hearted === 'hearted') {

        setState({...state, hearted: 'heart'});   
        handleUnlike();
        }
    
    }

    function handleResize() {
    if (state.height === 'calc(100vh)') {
        setState({...state, height: 'calc(100vh - 128px)', picHeight: '90'});
    } else {
        setState({...state, height: 'calc(100vh)', picHeight: '98'});
    }
    }

    function onHover() {
    if (!state.hover && state.height === 'calc(100vh)') {
        setState({...state, hover: true});
        setTimeout(() => {
        setState({...state, hover: false});
        }, 6000);

    }
    }
    

    const {picture, user, comments} = props;

    if (!picture) 
      return null;
    let cName = state.feedTransition
      ? 'pic-fade-out'
      : 'base';

    let isAuthor = picture.author_id === user.id ? '' : 'not-deletable';
    let hover = state.hover ? 'hover-state' : 'base-state';
    let isAuth = picture.author_id === user.id ? '#222222' : '#c9c9c9bb';

    return (
        <section className={`picture-detail ${cName}`}>
        <ul className="pic-detail-img" style={{height: `${state.height}`}}
          onMouseMove={onHover}
          
        >
          <li className="resize-pic-container" onClick={handleResize}> 
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
                  src={`${picture.authorProfilePicture}`} className="icon-avatar-pic-detail" />
                  <div className="pic-detail-info">
                    <p className="pic-icon-text-detail">{picture.title}</p>
                    <p className="pic-detail-user">
                    by {picture.author}
                    &nbsp;•&nbsp; {state.follows
                      ? <a onClick={handleUnfollow} className="follow-style-detail">Unfollow</a>
                      : <a onClick={handleFollow} className="follow-style-detail" >Follow</a>}
                  </p>
                                      
                  </div>

  

              </div>
              <div className="like-side-detail">

              <div 
              onClick={heartAnimation}
              className={`${state.hearted} ${state.animation}`}>
                  
              </div>
              <span id="likes-resize-detail">{props.picture.numLikes}</span>

              </div>

          </li>

          <li className="prev-pic-container" onClick={handleClickPrev}>
            <button className="prev-pic">
              <i className="fas fa-less-than"></i>
            </button>
          </li>
          <li className="next-pic-container" onClick={handleClickNext}>
            <button className="next-pic">
              <i className="fas fa-greater-than"></i>
            </button>
          </li>
          <li className="cross-container" onClick={handleClick}>
            <button >
              <i className="fas fa-times"></i>
            </button>
          </li>
          <li className="pic-container">
            <img src={`${picture.pictureUrl}`} className="pic-style" 
            style={{
              height: `${state.picHeight}%`,
              maxWidth: `${state.picWidth}%`
              }}/>
          </li>
        </ul>
        <div className="pic-content-container">
          <ul className="pic-content">
            <li className="pic-info">
              <div className="pic-likes">
                {/* <i className="far fa-heart fa-2x"></i> */}
                <div className="like-icon-container">

                  {/* {!state.liked
                    ? svgReg
                    : svgLiked} */}

                <div 
                onClick={heartAnimation}
                className={`${state.hearted} ${state.animation}`}>
                    
                </div>
                  <span id="like-icon-likes">{props.picture.numLikes} Like
                  {props.picture.numLikes === 1 ? "" : <span>s</span> }</span>
                </div>
                <svg
                  
                  style={{cursor: 'pointer'}}
                  onClick={handleEdit}
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
                        fill={`${isAuth}`}
                        fillRule="nonzero"
                        xlinkHref="#path-1___DDQ0V4qe"/>
                      <g
                        className="inline_svg_icon__fill"
                        id="00-Mixin/Fill/01-Very-Dark-Grey___DDQ0V4qe"
                        mask="url(#mask-2___DDQ0V4qe)"
                        fill={`${isAuth}`}
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
                  <i className={`fas fa-trash-alt trash-pic ${isAuthor}`} style={{cursor: 'pointer'}} onClick={handleDelete}></i>
                  <span className={`${isAuthor}`}>Delete Picture</span>
                </div>
              </div>
              <div className="pic-title">

                <div>
                  <h3 className="h3-pic-title">{picture.title}</h3>
                  <p>
                    by {picture.author}
                    &nbsp;•&nbsp; {state.follows
                      ? <a onClick={handleUnfollow} style={{cursor: 'pointer'}} className="follow-style">Unfollow</a>
                      : <a onClick={handleFollow} style={{cursor: 'pointer'}} className="follow-style">Follow</a>
}
                  </p>

                </div>
                <div 
                onClick={handleProfileRedirect}
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
                          style={{height: `${state.tHeight}px`}}
                          className="comment-style-text"
                          onChange={onChange('commentBody')}
                          placeholder="Add a comment"
                          value={state.commentBody}></textarea>
                        <i className="far fa-comment comment-icon"></i>
                        {/* <div className="comment-icon"></div> */}
                      </div>

                      <div className="make-comment-container">
                        <a className="make-comment-cancel">
                          Cancel
                        </a>
                        <a className="make-comment" 
                        style={{cursor: 'pointer'}}                        
                        onClick={handleCreateComment}>
                          Comment
                        </a>
                      </div>
                    </div>
                  </div>
                  <div >
                    {comments.map((el, i) => <CommentItem
                      comment={el}
                      key={i}
                      createCommentLike={props.createCommentLike}
                      deleteCommentLike={props.deleteCommentLike}
                      deleteComment={props.deleteComment}
                      user={user}
                      history={props.history}
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
    )
}

export default PictureDetail
