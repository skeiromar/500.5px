import React, {Component} from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import LoginFormContainer from '../auth/login_form_container';
import SignupFormContainer from '../auth/signup_form_container';
import {createPicture} from '../../actions/picture_actions';
import {changeProfilePicture, changeBackgroundImg} from '../../actions/user_actions';
import FollowItem from './follow_item';
import TagItem from '../tag/tag_item';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

class Modal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pics: '',
      picFile: {
        name: ''
      },
      picUrl: null,
      uploaded: false,
      title: '',
      description: '',
      tag: '',
      tags: [],

    };
    this.handleFile = this
      .handleFile
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
    this.closeMod = this
      .closeMod
      .bind(this);
    this.handleProfile = this
      .handleProfile
      .bind(this);
    this.handleBackground = this
      .handleBackground
      .bind(this);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);

  }

  handleProfile(e) {
    e.preventDefault();

    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    // fileReader.onloadend = () => {   this.setState({picFile: file, picUrl:
    // fileReader.result}); };
    if (file) {
      fileReader.readAsDataURL(file);
    }

    const formData = new FormData();

    formData.append("user[profile_picture]", file);
    // debugger
    let currentUserId = this.props.currId;
    this
      .props
      .createProfilePicture({formData, currentUserId})
      .then(success => {
        this.closeMod();

      });

  }
  handleBackground(e) {
    e.preventDefault();

    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    // fileReader.onloadend = () => {   this.setState({picFile: file, picUrl:
    // fileReader.result}); };
    if (file) {
      fileReader.readAsDataURL(file);
    }

    const formData = new FormData();

    formData.append("user[background_img]", file);
    // debugger
    let currentUserId = this.props.currId;
    this
      .props
      .changeBackgroundImg({formData, currentUserId})
      .then(success => {
        this.closeMod();

      });

  }
  onChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  closeMod() {
    this.setState({uploaded: false});
    this
      .props
      .closeModal();
  }

  handleFile(e) {
    // this.setState({picFile: e.currentTarget.files[0]});

    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({picFile: file, picUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
    this.setState({uploaded: true});
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.action(this.state);

    const formData = new FormData();
    formData.append("picture[title]", this.state.title);
    formData.append("picture[description]", this.state.description);

    formData.append("picture[author_id]", this.props.currId);

    if (this.state.picFile) {

      formData.append("picture[picture]", this.state.picFile);
    }
    // debugger

    this
      .props
      .submitForm(formData)
      .then(success => {
        this.closeMod();

      });

    // formData.append("picture[author_id]", '8');
  }

  handleFollow(uId) {
    const {followUser, currId} = this.props;

    // this.setState({follows: true});
    let newCurr = currId[0] ? currId[0] : currId;
    followUser({follower_id: newCurr, followed_id: uId});

  }
  handleUnfollow(uId) {
    const {unFollowUser, currId} = this.props;
    let newCurr = currId[0] ? currId[0] : currId;
    unFollowUser({follower_id: newCurr, followed_id: uId});

  }
  handleKeyDown(e) {
    if (e.key === 'Enter' && this.state.tag.length > 0) {
      this.setState({tags: [...this.state.tags, this.state.tag]});
      
      this.setState({tag: ''});
    }
  }

  render() {
    const {modal, closeModal} = this.props;
    if (!modal) 
      return null;


    const preview = this.state.picUrl
      ? <img src={this.state.picUrl} className="uploaded-modal-pic"/>
      : null;

    switch (modal) {
      case 'open-upload-modal':
        return !this.state.uploaded
          ? (

            <div className="modal-background" onClick={this.closeMod}>
              <div className="modal-child upload-modal" onClick={e => e.stopPropagation()}>

                <div
                  className="drop-modal-area"
                  aria-disabled="false"
                  style={{
                  position: 'relative'
                }}>
                  <p className="modal-btn-p">
                    <button className="button-style">Upload</button>
                    Or drag &amp; drop photos anywhere on this page
                    <input
                      accept="image/*"
                      type="file"
                      autoComplete="off"
                      className="input-style"
                      onChange={this.handleFile}/>
                  </p>
                </div>

              </div>
            </div>
          )
          : (
            <div className="modal-background" onClick={this.closeMod}>
              <div
                className="modal-child upload-modal-form"
                onClick={e => e.stopPropagation()}>

                {/* background: #f7f8fa;
              color: #b9c1c7;*/}
                <div>
                  <div className="upload-modal-second">
                    <ul className="uploaded-modal-stuff">
                      <li className="modal-pic-cont">
                        {preview}
                        <div className="pic-name">
                          <span>{this.state.picFile.name}</span>
                        </div>
                        
                      </li>
                      <li className="add-more-pics">
                        <div className="modal-ico">
                          <i className="fas fa-plus fa-2x"></i>
                        </div>
                        <div className="add-more-pics-txt">
                          Add more pictures</div>
                      </li>
                    </ul>
                  </div>

                  <div className="upload-modal-right">
                    <ul className="upload-modal-right-form">
                      <form onSubmit={this.handleSubmit} className="file-container">
                        <li className="upload-modal-list-btn">
                          <input type="submit" value="Submit" className="btn-upload"/>

                        </li>
                        <li className="upload-modal-title-input">
                          Title
                          <input type="text" 
                          className="title-input"
                          onChange={this.onChange("title")}/>

                        </li>
                        <li className="upload-modal-list-desc">
                          Description {/* <input type="text" onChange={this.onChange("description")}/> */}
                          <textarea 
                          className="modal-desc-btn"
                          cols="30" 
                          rows="10" 
                          onChange={this.onChange("description")}></textarea>

                        </li>
                      </form>
                        {/* <li className="upload-modal-title-input">
                          Tags
                          <input type="text" 
                          className="title-input"
                          onKeyDown={this.handleKeyDown}
                          onChange={this.onChange("tag")}
                          value={this.state.tag}
                          />
                          
                        </li>
                        <li className="tag-item-cont">
                          
                          {this.state.tags.map((e, i) => <TagItem key={i} tag={e} />)}
                        </li> */}
                    </ul>
                  </div>

                </div>

              </div>
            </div>
          );

      case 'open-followers-modal':
        return (
          <div className="modal-background" onClick={this.closeMod}>
            <div className="modal-child follow-modal" onClick={e => e.stopPropagation()}>

              <div onSubmit={this.handleSubmit} className="profile-container">
                <h2>Followers</h2>
                <ul className="li-wo-bullets">

                  <div className="followers-container">
                    <ul className="follows-ul-modal">
                      {this
                        .props
                        .follows
                        .map((el, i) => <FollowItem key={i} follow={el} 
                        handleUnfollow={this.handleUnfollow}
                        handleFollow={this.handleFollow} 
                        isFollow={this.props.currentUser.followedIds.includes(el.id)}
                        />)}
                    </ul>
                  </div>

                </ul>

              </div>

            </div>
          </div>
        );
      case 'open-followed-modal':
        return (
          <div className="modal-background" onClick={this.closeMod}>
            <div className="modal-child follow-modal" onClick={e => e.stopPropagation()}>

              <div onSubmit={this.handleSubmit} className="profile-container">
                <h2>Followed</h2>
                <ul className="li-wo-bullets">

                  <div className="followers-container">
                    <ul className="follows-ul-modal">
                      {this
                        .props
                        .follows
                        .map((el, i) => <FollowItem 
                        key={i} 
                        follow={el}
                        handleUnfollow={this.handleUnfollow}
                        handleFollow={this.handleFollow} 
                        />)}
                    </ul>
                  </div>

                </ul>

              </div>

            </div>
          </div>
        );
      case 'changeProfile-Modal':
        return (

          <div className="modal-background" onClick={this.closeMod}>
            <div
              className="modal-child upload-pic-modal"
              onClick={e => e.stopPropagation()}>

              <div
                className="drop-modal-area"
                aria-disabled="false"
                style={{
                position: 'relative'
              }}>
                <p className="modal-btn-p-profile">
                  <button className="button-style">Change Profile Picture</button>
                  Or drag &amp; drop photos anywhere on this page
                  <input
                    accept="image/*"
                    type="file"
                    autoComplete="off"
                    className="input-style-profile"
                    onChange={this.handleProfile}/>
                </p>
              </div>

            </div>
          </div>
        );
      case 'changeBackground-Modal':
        return (

          <div className="modal-background" onClick={this.closeMod}>
            <div
              className="modal-child upload-pic-modal"
              onClick={e => e.stopPropagation()}>

              <div
                className="drop-modal-area"
                aria-disabled="false"
                style={{
                position: 'relative'
              }}>
                <p className="modal-btn-p-profile">
                  <button className="button-style">Change Background</button>
                  Or drag &amp; drop photos anywhere on this page
                  <input
                    accept="image/*"
                    type="file"
                    autoComplete="off"
                    className="input-style-profile"
                    onChange={this.handleBackground}/>
                </p>
              </div>

            </div>
          </div>
        );
      default:
        return null;
    }
  }
}

const mapStateToProps = state => {
  let st = state.session.id || [1]
  let currentUserId = st;
  let follows = Object.values(state.entities.follows) || [];
  let currentUser = state.entities.users[st];
  // debugger
  return {
    modal: state.ui.modal, 
    currId: currentUserId, 
    follows: follows, 
    currentUser: currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    submitForm: (form) => dispatch(createPicture(form)),
    createProfilePicture: (profile_picture) => dispatch(changeProfilePicture(profile_picture)),
    changeBackgroundImg: (background_img) => dispatch(changeBackgroundImg(background_img)),
    followUser: (follow) => dispatch(createFollow(follow)),
    unFollowUser: (unfollow) => dispatch(deleteFollow(unfollow)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

{/* <div className="upload-form">
  <ul className="upload-form-list">
    <li>
      <button className="upload-form-button">Submit</button>
        </li>
          <li>
            <label>
              <p>Title</p>
                <input type="text" defaultValue />
                  </label>
                    </li>
                    <li>
                  <label>
                <p>Description</p>
              <textarea defaultValue={""} />
            </label>
          </li>
        <li>
      <ul className="error-lists" />
    </li>
  </ul>
</div> */
}
