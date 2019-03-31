import React, { Component } from 'react';
import { Route } from 'react-router-dom';


class PictureDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedTransition: false,
      like: 'black',
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);

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
  hoverOn() {
    this.setState({like: 'red'});
  }
  hoverOff() {
    this.setState({like: 'black'});
  }
  handleLike() {
    this.setState({liked: true});
  }
  handleUnlike() {
    this.setState({liked: false});
  }

  render() {
    
    const { picture, user } = this.props;

    if (!picture) return null;
    let cName = this.state.feedTransition ? 'pic-fade-out' : 'base';

    let svgReg = (<svg 
        className="like-icon" 
        onMouseEnter={this.hoverOn} 
        onMouseLeave={this.hoverOff}
        onClick={this.handleLike} 
        
        width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <path d="M11.928876,4.6480912 L12.268427,4.08281926 C13.4186334,2.16799854 15.4502756,1.00047365 17.640319,1.00047365 C20.9665079,1.00047365 23.6115335,3.72719604 23.952284,7.46069537 C24.0524883,8.09583562 23.989822,8.95324869 23.7520608,9.95403891 C23.2561658,12.0442247 22.1102297,13.9438554 20.4356532,15.4532147 L11.9291005,23 L11.5587201,22.6657451 L3.56335709,15.4502177 C1.89207231,13.9442591 0.745805889,12.0443377 0.249864075,9.95441177 C0.0120791844,8.95320548 -0.0509420637,8.09022324 0.0393524413,7.54691523 C0.389542516,3.73723479 3.02636199,1 6.36151742,1 C8.51703851,1 10.4575214,2.14427858 11.5948462,4.07967088 L11.928876,4.6480912 Z M11.935454,21.4750856 L19.6923785,14.5933728 C21.1939099,13.2399645 22.216764,11.544368 22.657827,9.68529788 C22.8629005,8.82209743 22.9146912,8.11348627 22.843875,7.67089565 L22.8335753,7.58638408 C22.5422299,4.39738972 20.3577125,2.14539935 17.640319,2.14539935 C15.8438074,2.14539935 14.1754415,3.10416003 13.2290188,4.67972935 L11.9183033,6.86175965 L10.6285982,4.66706093 C9.692462,3.07403263 8.11687011,2.1449257 6.36151742,2.1449257 C3.63696721,2.1449257 1.45864191,4.40620594 1.15496645,7.69411485 C1.08707312,8.10935089 1.13917743,8.82284185 1.34410083,9.68568309 C1.785178,11.5444063 2.80832786,13.2402637 4.31014954,14.593523 L11.935454,21.4750856 Z" id="path-1___wCMwVYuq" />
          </defs>
          <g id="Icon/Very-Dark-Grey/Like---Outline___wCMwVYuq" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g id="01-Icon/Utility-Icon/_/Like---Outline___wCMwVYuq">
              <mask id="mask-2___wCMwVYuq" fill="white">
                <use xlinkHref="#path-1___wCMwVYuq" />
              </mask>
              <use id="Mask___wCMwVYuq" fill={this.state.like} fillRule="zero" xlinkHref="#path-1___wCMwVYuq" />
              <g className="inline_svg_icon__fill" id="00-Mixin/Fill/01-Very-Dark-Grey___wCMwVYuq" mask="url(#mask-2___wCMwVYuq)" fill="#222222" fillRule="evenodd">
                <rect id="Box___wCMwVYuq" x={0} y={0} width={24} height={24} />
              </g>
            </g>
          </g>
        </svg>
    );

      let svgLiked = (<svg
          className="like-icon" 
          onMouseEnter={this.hoverOn} 
          onMouseLeave={this.hoverOff} 
          onClick={this.handleUnlike}           
          
          width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

          
            <defs>
              <path d="M11.928876,4.6480912 L12.268427,4.08281926 C13.4186334,2.16799854 15.4502756,1.00047365 17.640319,1.00047365 C20.9665079,1.00047365 23.6115335,3.72719604 23.952284,7.46069537 C24.0524883,8.09583562 23.989822,8.95324869 23.7520608,9.95403891 C23.2561658,12.0442247 22.1102297,13.9438554 20.4356532,15.4532147 L11.9291005,23 L11.5587201,22.6657451 L3.56335709,15.4502177 C1.89207231,13.9442591 0.745805889,12.0443377 0.249864075,9.95441177 C0.0120791844,8.95320548 -0.0509420637,8.09022324 0.0393524413,7.54691523 C0.389542516,3.73723479 3.02636199,1 6.36151742,1 C8.51703851,1 10.4575214,2.14427858 11.5948462,4.07967088 L11.928876,4.6480912 Z" id="path-1___mMfJpL2P" />
            </defs>
            <g id="Icon---Like---Filled___mMfJpL2P" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <g id="01-Icon/Utility-Icon/_/Like---Filled___mMfJpL2P">
                <mask id="mask-2___mMfJpL2P" fill="white">
                  <use xlinkHref="#path-1___mMfJpL2P" />
                </mask>
                <use id="Mask___mMfJpL2P" fill="#000000" fillRule="nonzero" xlinkHref="#path-1___mMfJpL2P" />
                <g id="00-Mixin/Fill/Raspberry-Red___mMfJpL2P" mask="url(#mask-2___mMfJpL2P)" fill="#C22B3F" fillRule="evenodd">
                  <rect id="Box___mMfJpL2P" x={0} y={0} width={24} height={24} />
                </g>
              </g>
            </g>
          </svg>
      );

    return (
      <section className={`picture-detail  ${cName}`}>
            <ul className="pic-detail-img">
              <li className="prev-pic-container" onClick={this.handleClickPrev}>
                <button className="prev-pic"><i className="fas fa-less-than"></i></button>
              </li>
              <li className="next-pic-container" onClick={this.handleClickNext}>
                <button className="next-pic"><i className="fas fa-greater-than"></i></button>
              </li>
              <li className="cross-container" onClick={this.handleClick}>
                <button  ><i className="fas fa-times"></i></button>
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
                    
                      {!this.state.liked ? svgReg : svgLiked }
                    
                    </div>
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

                    <div>
                      <img src="https://i.imgur.com/cx9qaS3.jpg" width="508" height="378"/>
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
                          <img src={`${user.pictureUrl}`} 
                          alt=""/>
                        </div>
                        <div>
                          <textarea name="" id="" cols="`10" rows="2">

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
</svg> */}