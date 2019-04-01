import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/store';
import {Root} from './components/root';
import {login, logout, signup} from './actions/session_actions';
import { followUser } from './util/follow_api_utils';
import {requestPictures, updatePicture} from './util/picture_api_utils';
import { openModal } from './actions/modal_actions';
import { createLike, deleteLike } from './util/like_api_utils';
import { createComment } from './util/comment_api_utils';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;

    if (window.currentUser) {
        let preLoadedState = {
            entities: 
            {
                users: {
                    [window.currentUser.id] : window.currentUser
                }
            },
            session: {
                id: [window.currentUser.id]
            }
        }
        store = configureStore(preLoadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.followUser = followUser;
    window.requestPictures = requestPictures;
    window.openModal = openModal;
    // window.openModal = closeModal;
    window.updatePicture = updatePicture;
    window.createLike = createLike;
    window.deleteLike = deleteLike;
    window.createComment = createComment;

    ReactDOM.render(<Root store={store}/>, root);
});

