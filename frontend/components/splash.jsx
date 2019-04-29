import React, { Component } from 'react'
import NavContainer from './nav_container';
import { withRouter } from 'react-router-dom';
class Splash extends Component {


    renderSignup() {
        // debugger
        // this.props.history.push(`signup/`);
    }
  render() {
    return (
      <div>
      <section>

        <div className="splash">
                <NavContainer />
            <div className="splash-content">
                
                <h1>Get inspired and share your best photos</h1>
                <h3>Find your home among the world's best photographers.</h3>
                {/* <button className="splash-btn" onClick={this.renderSignup}>Join 500.5px</button> */}
                <a href="/#/signup" className="splash-btn">Join 500.5px</a>
            </div>

        </div>
      </section>
    <section className="rest-splash-content">
        <header className="spl-sec-hdr">

        <h1 className="rst-spl-hdl">The top photos, chosen by you</h1>
        <p className="rst-spl-p">Discover what’s trending according to photographers around the world.</p>
        </header>
        <div >
            {/* <ul className="rst-spl-tabs">
                <li className="spl-tpc">
                    <a href="/#/coming" style={{cursor: 'pointer'}}>People</a>
                </li>
                <li className="spl-tpc">
                    <a href="/#/coming" style={{cursor: 'pointer'}}>Landscapes</a>
                </li>
                <li className="spl-tpc">
                    <a href="/#/coming" style={{cursor: 'pointer'}}>Nature</a>
                </li>
                <li className="spl-tpc">
                    <a href="/#/coming" style={{cursor: 'pointer'}}>City</a>
                </li>
            </ul> */}
        </div>
        <ul className="feed-flex-img-cnt spl-imgs">                  
            <div  className="feed-flex-item">
                <img className="feed-flex-img" 
                src='https://picsum.photos/500/600/?random'/>
            </div>
            <div className="feed-flex-item">
                <img className="feed-flex-img" 
                src='https://picsum.photos/600/500/?random'/>
            </div>
            <div className="feed-flex-item">
                <img className="feed-flex-img" 
                src='https://picsum.photos/300/200/?random'/>
            </div>
            <div className="feed-flex-item">
                <img className="feed-flex-img" 
                src='https://picsum.photos/500/700/?random'/>
            </div>
            <div  className="feed-flex-item">
                <img className="feed-flex-img" 
                src='https://picsum.photos/700/500/?random'/>
            </div>
            <div className="feed-flex-item">
                <img className="feed-flex-img" 
                src='https://picsum.photos/600/800/?random'/>
            </div>
            <div className="feed-flex-item">
                <img className="feed-flex-img" 
                src='https://picsum.photos/800/600/?random'/>
            </div>
            <div className="feed-flex-item">
                <img className="feed-flex-img" 
                src='https://picsum.photos/200/600/?random'/>
            </div>
        </ul>
        
        <div className="spl-sec-hdr">
            <h1 className="rst-spl-hdl">Get motivated to share your best work</h1>
            <p className="rst-spl-p">Become part of a community that celebrates incredible photography.</p>

        </div>
        <ul className="spl-ftr">
            <li>

            <img className="spl-ftr-img" src="https://assetcdn.500px.org/assets/static_pages/home/home_feed-016152321918701c21b1aa14b818a2c9.jpg" alt=""/>
            </li>
            <li className="spl-ftr-txt">
            <div >
            <h1>Get global exposure</h1>
            <p className="spl-ftr-txt-p">Imagine having your photos seen by photographers like you from all over the world. When you upload your photos, they’re shared with 500px members worldwide. Watch as your photos get reactions from the community—and see if your shot makes it to Popular.</p>
            <a className="splash-btn ftr-btn" href="/#/feed">Discover</a>
            </div>
            </li>

        </ul>
        <ul className="spl-ftr">
        <li className="spl-ftr-txt">
            <div >
            <h1>Connect with photographers everywhere</h1>
            <p className="spl-ftr-txt-p">You’re not just joining a network—you’re joining a real community. Follow photographers to get their newest photos appearing in your home feed, share your thoughts by liking and commenting on photos, and discuss all the details of photography in groups.</p>
            <a href="/#/signup">

            <button className="splash-btn ftr-btn">Sign Up</button>
            </a>
            </div>
            </li>
            <li>

            <img className="spl-ftr-img" src="https://assetcdn.500px.org/assets/static_pages/home/profile-a9044b11960d0e27b7d7c41be61e2a0f.jpg" alt=""/>
            </li>
        </ul>
        <ul className="spl-ftr">
        <li>

        <img className="spl-ftr-img" src="https://assetcdn.500px.org/assets/static_pages/home/marketplace-d6493f51ccb69ac80c1568efd4f16376.jpg" alt=""/>
        </li>
        <li className="spl-ftr-txt">
            <div >
            <h1>Make money doing what you love</h1>
            <p className="spl-ftr-txt-p">Submit your photos to 500px and license your content through our exclusive distribution partners.</p>
            <a href="/#/signup">

            <button className="splash-btn ftr-btn">Sign Up</button>
            </a>
            </div>
            </li>

        </ul>
        <ul className="spl-txt-cent">
            <li className="spl-ftr-txt-cent">
            <div >
            <h1>Join our community of 15 million inspired photographers around the world.</h1>
            <p className="spl-ftr-txt-p">Get a 14-day trial of our Pro membership when you sign up.</p>
            <a href="/#/signup">

            <button className="splash-btn ftr-btn">Join 500.5px</button>
            </a>
            </div>
            </li>
        </ul>
        </section>
            <p className="hline"></p>
        <footer className="ftr-cnt">
        <ul >
        <li>
        <h3>© 2017 500.5px</h3>
        </li>
        <li>
        <div className="ftr-abt">500.5px is the leading network for photographers to discover and share incredible photos, gain global exposure, and get paid for their work and skills.</div>
        </li>
        </ul>
        <ul>
        <li>
        <h3>Community</h3>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/">Popular</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Memberships</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" target="_blank">App Store</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Google Play</a>
        </li>
        <li>
        <a href="/#/signup" >Sign up</a>
        </li>
        <li>
        <a href="/#/login" >Log in</a>
        </li>
        </ul>
        <ul>
        <li>
        <h3><span title="translation missing: en.static_pages.footer.business.business">Business</span></h3>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Licensing</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Studio</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Directory</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Quests</a>
        </li>
        </ul>
        <ul>
        <li>
        <h3>Company</h3>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >About</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Press</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Jobs</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Terms</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Privacy</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Support</a>
        </li>
        </ul>
        <ul>
        <li>
        <h3>Follow</h3>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Blog</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Facebook</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Twitter</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Instagram</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Pinterest</a>
        </li>
        <li>
        <a href="https://skeiromar.github.io/My-Portfolio-Site/" >Google+</a>
        </li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default withRouter(Splash);