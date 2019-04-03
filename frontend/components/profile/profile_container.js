import {connect} from 'react-redux';
import Profile from './profile';
import { fetchUserPictures } from '../../actions/picture_actions';
import {fetchUser} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { fetchFollowers, fetchFollowed } from '../../actions/user_actions';

const msp = (state, props) => {
    let user = state.entities.users[props.match.params.userId];
    let pictures = Object.values(state.entities.pictures) || [];
    let currentUser = state.entities.users[state.session.id] || {};
    return {
        currentUser: currentUser,
        user: user,
        pictures: pictures
    };
};


const mdp = (dispatch) => {

    return {        
        fetchUserPictures: (id) => dispatch(fetchUserPictures(id)), 
        fetchUser: id => dispatch(fetchUser(id)),
        openModal: (modalType) => dispatch(openModal(modalType)),
        followUser: (follow) => dispatch(createFollow(follow)),
        unfollowUser: (follow) => dispatch(deleteFollow(follow)),
        fetchFollowers: id => dispatch(fetchFollowers(id)),
        fetchFollowed: id => dispatch(fetchFollowed(id))
         
    };
};



export default connect(msp, mdp)(Profile);