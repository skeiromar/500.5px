import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PictureIndexItem extends Component {
  constructor(props) {
      super(props);

      this.state = {
          hover: false,
      };
      this.onHover = this.onHover.bind(this);
      this.offHover = this.offHover.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.openProfile = this.openProfile.bind(this);

  } 
  handleClick() {   
    // this.props.openModal('show-pic');
    // setTimeout(null , 1000);
    
  }

  onHover() {
    this.setState({hover: true});
  }

  offHover() {
    this.setState({hover: false});
    
  }
  openProfile() {
    // debugger
    const {picture, numLikes, likerIds} = this.props;

    this.props.history.push(`/profile/${picture.author_id}`);
  }
  render() {
    const {picture, numLikes, likerIds} = this.props;
    let className = this.state.hover ? 'hover-state' : 'base-state';
    return (
      <div className={`feed-flex-item`}
        onMouseEnter={this.onHover}
        onMouseLeave={this.offHover} 
        >
        <Link 
        
        style={{cursor: 'pointer'}}
        to={`/pictures/${picture.id}`}>
        
        <img src={`${picture.pictureUrl}`}
            className="feed-flex-img"
        />
        </Link>
        <div className={`top-right ${className}`} style={{cursor: 'default'}}>
            <span className="like-more icon-hover likes">{numLikes}</span>
        </div>
        <div className={`bottom-middle ${className}`}>
            <div className="profile-info">
                {/* <i className="fas fa-plus"></i> */}
                <img 
                onClick={this.openProfile}
                src={`${picture.authorProfilePicture}`} className="icon-avatar-pic" />
                <span className="pic-icon-text" style={{cursor: 'default'}}>{picture.author}</span>
            </div>
            
        </div>
      </div>
    )
  }
}
