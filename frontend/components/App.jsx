
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
// import Modal from './modal/modal';
// import {closeModal} from '../actions/modal_actions';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
        
        <Route exact path="/" component={Splash} />

        <AuthRoute exact path="/login" component={ LoginFormContainer } />
        <AuthRoute exact path="/signup" component={ SignupFormContainer } />
        <ProtectedRoute exact path="/feed" component={ FeedContainer } />
        </Switch>
      </div>
    )
  }
}

export default App;