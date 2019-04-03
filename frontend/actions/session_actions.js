import * as sessionAPIUTIL from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS =  "RECEIVE_ERRORS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});
export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});
export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors 
});
export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors 
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});

export const fetchUser = (id) => dispatch => sessionAPIUTIL.fetchUser(id).then(user => dispatch(receiveUser(user)));

export const login = (user) => dispatch => sessionAPIUTIL.login(user).then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => sessionAPIUTIL.logout().then(() => dispatch(logoutCurrentUser()));

export const signup = (user) => dispatch => sessionAPIUTIL.signup(user).then(user => dispatch(receiveCurrentUser(user)));
