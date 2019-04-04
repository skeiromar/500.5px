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
      .createLike({author_id: this.props.user.id, likable_id: this.props.comment.id, likable_type: 'Comment'});
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
    this
      .props
      .history
      .push(`/profile/${this.props.comment.author_id}`);
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

    let regSvg = (
      <svg
        className="comment-like-icon"
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
        className="comment-like-icon"
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
      <ul className="comment-item">
        <li className="comment-pic">
          <a className="comment-pic-a" onClick={this.handleUserRedirection}>
            <img className="comment-pic-icon" src={`${comment.username_pic}`}/>
          </a>
        </li>
        <li className="comment-body-container">
          <div className="comment-username-container">
            <p className="comment-username">{comment.username}</p>
            <p className="comment-timestamp">2 hours ago</p>
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
            <span className="comment-likes">{comment.numLikes} likes</span>
          </a>
          <div className="comment-del-icon-container">
            <i
              className="fas fa-trash-alt comment-del-icon"
              onClick={this.handleCommentDelete}></i>
          </div>
        </li>
      </ul>
    )
  }
}

export default CommentItem;