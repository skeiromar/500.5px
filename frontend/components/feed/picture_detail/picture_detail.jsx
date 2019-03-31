import React, { Component } from 'react';
import { Route } from 'react-router-dom';


class PictureDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedTransition: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);

  }
  componentDidMount() {
    this.props.requestPicture(this.props.match.params.pictureId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pictureId !== this.props.match.params.pictureId) {
      this.props.requestPicture(this.props.match.params.pictureId);
    }
  }
  handleClick() {
    this.setState({feedTransition: true});
    setTimeout(() => {

      this.props.history.push('/feed/');
    }, 300);
  }
  handleClickNext() {
    let nextPage = parseInt(this.props.match.params.pictureId) + 1;
    this.props.history.push(`/pictures/${nextPage}`);
    
  }
  handleClickPrev() {
    let prevPage = this.props.match.params.pictureId - 1;
    this.props.history.push(`/pictures/${prevPage}`);
    
  }

  render() {
    
    const { picture } = this.props;

    if (!picture) return null;
    let cName = this.state.feedTransition ? 'pic-fade-out' : 'base';
    console.log(cName);
    return (
      <section className={`picture-detail  ${cName}`}>
            <ul className="pic-detail-img">
              <li className="prev-pic-container" onClick={this.handleClickPrev}>
                <button className="prev-pic"><i className="fas fa-less-than"></i></button>
              </li>
              <li className="next-pic-container" onClick={this.handleClickNext}>
                <button className="next-pic"><i class="fas fa-greater-than"></i></button>
              </li>
              <li className="cross-container">
                <button onClick={this.handleClick} ><i className="fas fa-times"></i></button>
              </li>
              <li className="pic-container">
                <img src={`${picture.pictureUrl}`} className="pic-style"/>
              </li>
            </ul>
            <div className="pic-content-container">
              <ul className="pic-content">
                <li className="pic-info">
                  <div className="pic-likes">
                    <i className="far fa-heart fa-2x"></i>
                    <span>19 Likes</span>
                  </div>
                  <div className="pic-title">
                    <div>
                      <h3 className="h3-pic-title">{picture.title}</h3>
                      <p>
                      by {picture.author} &nbsp;•&nbsp; <a className="follow-style">Follow</a>
                      </p>
                      
                    </div>
                    <div className="profile-pic-container">
                      <img src={`${picture.authorProfilePicture}`} 
                      className="icon-avatar-detail"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <h3>Description:</h3>
                      <p className="pic-description">{picture.description}</p>
                    </div>
                  </div>

                </li>
                <li>

                  <div>
                    <h3>
                      35 Comments
                    </h3>
                    <div>
                      <div>
                        <div>
                          <img src="" 
                          alt=""/>
                        </div>
                        <div>
                          <textarea name="" id="" cols="30" rows="10">

                          </textarea>
                          <i className="far fa-comment"></i>
                        </div>
                      </div>
                      <div>
                        {/* CommentItem */}
                      </div>
                    </div>
                    <div>

                    </div>
                  </div>

                </li>
              </ul>
            </div> 
        
      </section>
    );
  }
}
export default PictureDetail;