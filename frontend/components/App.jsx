
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavContainer from './nav_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Splash from './splash.jsx';
import FeedContainer from './feed/feed_container.js';
import PictureDetailContainer from './feed/picture_detail/picture_detail_container';
import PictureEditContainer from './feed/picture_edit/picture_edit_container';
import ProfileContainer from './profile/profile_container';
import Modal from './modal/modal';
// import {closeModal} from '../actions/modal_actions';
import ComingSoon from './coming_soon';
import About from './about';

class App extends Component {

  render() {
    return (
      <div>
        <Modal />
        <Switch>
        
        <Route exact path="/" component={Splash} />

        <AuthRoute exact path="/login" component={ LoginFormContainer } />
        <AuthRoute exact path="/signup" component={ SignupFormContainer } />
        <ProtectedRoute exact path="/feed" component={ FeedContainer } />
        <ProtectedRoute path="/profile/:userId" component={ ProfileContainer } />
        <ProtectedRoute path="/pictures/:pictureId/edit" component={ PictureEditContainer } />
        <ProtectedRoute exact path="/pictures/:pictureId" component={ PictureDetailContainer } />
        <Route exact path="/coming" component={ComingSoon} />
        <Route exact path="/about" component={About} />
        </Switch>
      </div>
    )
  }
}

export default App;