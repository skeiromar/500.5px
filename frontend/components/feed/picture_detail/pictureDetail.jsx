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
    function onChange(type) {
        return (e) => {
          if (type === 'commentBody' && (state.commentBody.length+1) % 34 === 0) {
            setState({...state, tHeight: state.tHeight + 25});
          } 
          this.setState({[type]: e.target.value});
        };
    }

    function handleClick() {
        this.setState({feedTransition: true}, () => setTimeout(() => {
    
          this
            .props
            .history
            .push('/feed/');
        }, 400));
        
    }
    
    function handleClickNext() {
    const {pictureIds, match} = this.props;
    if (isEmpty(pictureIds)) 
        return null;
    
    let indexInPicIds = pictureIds.indexOf(match.params.pictureId);

    let nextPage = pictureIds[indexInPicIds - 1];
    if (nextPage !== undefined) 
        this.props.history.push(`/pictures/${nextPage}`);

    }
    function handleClickPrev() {
    const {pictureIds, match} = this.props;
    if (isEmpty(pictureIds)) 
        return null;
    let indexInPicIds = pictureIds.indexOf(match.params.pictureId);

    let prevPage = pictureIds[indexInPicIds + 1];
    if (prevPage !== undefined) 
        this.props.history.push(`/pictures/${prevPage}`);

    }
    function hoverOn() {
    this.setState({like: 'red'});
    }
    function hoverOff() {
    this.setState({like: 'black'});
    }
    function handleLike() {

    this.setState({liked: true});

    this.props.createPictureLike({author_id: this.props.user.id, likable_id: this.props.picture.id})
    .then(() => this.setState({hearted: 'hearted'}));
    }
    function handleUnlike() {
    const {user, picture} = this.props;

    this.setState({liked: false});
    this
        .props
        .deletePictureLike({author_id: user.id, likable_id: picture.id});
    }
    function handleDelete() {
    const {picture, user} = this.props;
    // if (picture.author_id === user.id) {
    this
        .props
        .deletePicture(this.props.picture.id)
        .then(() => this.props.history.push('/feed'), null);
    // }
    }

    function handleEdit() {
    // here be thy console.log('this works', this.props);
    this
        .props
        .history
        .push(`/pictures/${this.props.picture.id}/edit`);

    }

    function handleFollow() {
    const {followUser, user, picture} = this.props;
    this.setState({follows: true});
    followUser({follower_id: user.id, followed_id: picture.author_id});

    }

    function handleUnfollow() {
    const {unfollowUser, user, picture} = this.props;
    this.setState({follows: false});

    unfollowUser({follower_id: user.id, followed_id: picture.author_id});
    }

    function handleProfileRedirect() {
    const {picture} = this.props;
    this.props.history.push(`/profile/${picture.author_id}`);
    }

    function heartAnimation() {
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

    function handleResize() {
    if (this.state.height === 'calc(100vh)') {
        this.setState({height: 'calc(100vh - 128px)', picHeight: '90'});
    } else {
        this.setState({height: 'calc(100vh)', picHeight: '98'});
    }
    }

    function onHover() {
    if (!this.state.hover && this.state.height === 'calc(100vh)') {
        this.setState({hover: true});
        setTimeout(() => {
        this.setState({hover: false});
        }, 6000);

    }
    }
    


    return (
        <div>
            
        </div>
    )
}

export default PictureDetail
