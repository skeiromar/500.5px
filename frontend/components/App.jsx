
import React from 'react';
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


const App = () => (
    <div>
        <Switch>
        
        <Route exact path="/" component={Splash} />
        
        <AuthRoute exact path="/login" component={ LoginFormContainer } />
        <AuthRoute exact path="/signup" component={ SignupFormContainer } />
        </Switch>

    </div>
);
export default App;