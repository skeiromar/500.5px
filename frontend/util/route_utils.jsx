
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id),
}};

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
  );
  

  

const Protected = ({ component: Component, path, loggedIn }) => {
   const retVal = (<Route
        path={path}
        render={props => {
            return loggedIn ? (
            <Component {...props} />)
             : 
             (<Redirect to="/login" />)
        }}
    />)
    return retVal;
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected)); 