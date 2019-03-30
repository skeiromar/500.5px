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

  } 
  handleClick() {   
    // this.props.openModal('show-pic');
  }

  onHover() {
    this.setState({hover: true});
  }

  offHover() {
    this.setState({hover: false});
    
  }
  render() {
    const {picture} = this.props;
    let className = this.state.hover ? 'hover-state' : 'base-state';
    return (
      <div className={`feed-flex-item`}
        onMouseEnter={this.onHover}
        onMouseLeave={this.offHover} 
        onClick={this.handleClick}
        >
        <Link to={`/picture/${picture.id}`}>
        <img src={`${picture.pictureUrl}`}
            className="feed-flex-img"
        />
        </Link>
        <div className={`top-right ${className}`}>
            <span className="like-more icon-hover likes">0</span>
        </div>
        <div className={`bottom-middle ${className}`}>
            <div className="profile-info">
                {/* <i className="fas fa-plus"></i> */}
                <img src={`${picture.profilePictureUrl}`} className="icon-avatar-pic" />
                <span className="pic-icon-text">{picture.username}</span>
            </div>
            <div className="like-more icon-hover">
                <i className="far fa-heart fa-2x"></i>
            </div>
        </div>
      </div>
    )
  }
}