import React from 'react';
import TestContainer from './test_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import {Route} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';



const App = () => (
    <div>
        <header>

            
            <TestContainer />

        </header>
        <AuthRoute exact path="/login" component={ LoginFormContainer } />
        <AuthRoute exact path="/signup" component={ SignupFormContainer } />

    </div>
);
export default App;