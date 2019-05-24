import React, {Component} from 'react'

class CommentItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      like: 'black',
      animation: '',
      // hearted: 'heart'
    };
    this.handleLike = this
      .handleLike
      .bind(this);
    this.handleUnlike = this
      .handleUnlike
      .bind(this);
    this.handleCommentDelete = this
      .handleCommentDelete
      .bind(this);
    this.handleUserRedirection = this
      .handleUserRedirection
      .bind(this);
  this.heartAnimation = this.heartAnimation.bind(this);
    

  }
  componentDidMount() {
    const {user, comment} = this.props;
    // if (comment.likerIds.includes(user.id))     this.setState({liked: true});
  }

  handleLike(e) {
    // e.preventDefault();

    // this.setState({liked: true});

    this
      .props
      .createCommentLike({author_id: this.props.user.id, likable_id: this.props.comment.id});
    //   deleteCommentLike={this.props.deleteLike}
  }
  handleUnlike(e) {
    // e.preventDefault();
    const {user, comment} = this.props;
    // this.setState({liked: false});
    this
      .props
      .deleteCommentLike({author_id: user.id, likable_id: comment.id});
  }

  handleCommentDelete() {
    const {comment, deleteComment} = this.props;
    // if (picture.author_id === user.id) {
    deleteComment(comment.id);
  }

  handleUserRedirection() {
    // debugger
    const { comment } = this.props;
    comment.author_id ? 
    this
      .props
      .history
      .push(`/profile/${this.props.comment.author_id}`) 
      : 
    this.props.history.push(`/profile/${this.props.comment.authorId}`);
  }
  heartAnimation() {
    if (this.props.liked === 'heart-comment') {
      this.setState({animation: 'heart-is-animating'});
      this.handleLike();
      setTimeout(() => {

        this.setState({animation: ''});   
        // this.setState({hearted: 'hearted'});   
      }, 600);
    } else {
      // this.setState({hearted: 'heart'}); 
      if (this.state.animation.length === 0) {

        // this.setState({hearted: 'hearted'});   
        this.handleUnlike();
      }
    }
  }

  render() {
    const {comment} = this.props;
    let isAuthor = comment.author_id === this.props.user.id ? '' : 'not-deletable';
    console.log(this.props);
    return (
      <ul className="comment-item">
        <li className="comment-pic">
          <a className="comment-pic-a" onClick={this.handleUserRedirection}>
            <img className="comment-pic-icon" src={`${comment.username_pic}`}/>
          </a>
        </li>
        <li className="comment-body-container">
          <div className="comment-username-container">
            <p className="comment-username">{comment.username}</p>
            <p className="comment-timestamp" style={{'visibility': 'hidden'}}>2 hours ago</p>
          </div>
          <p className="comment-body">
            {comment.body}
          </p>
          <a className="comment-like">
            <div>
              {/* {this.props.liked
                ? svgLiked
                : regSvg} */}
                <div 
                onClick={this.heartAnimation}
                className={`${this.props.liked} ${this.state.animation}`}>
                    
                </div>
                </div>
            <span className="comment-likes">{comment.numLikes} like
            {comment.numLikes === 1 ? "" : <span>s</span> }</span>
          </a>
          <div className={`comment-del-icon-container ${isAuthor}`}>
            <i
              className="fas fa-trash-alt comment-del-icon"
              style={{cursor: 'pointer'}}

              onClick={this.handleCommentDelete}></i>
          </div>
        </li>
      </ul>
    )
  }
}

export default CommentItem;