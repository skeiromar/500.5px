import {connect} from 'react-redux';
import Feed from './feed';
import {fetchPictures} from '../../actions/picture_actions';
import {openModal, closeModal} from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const msp = (state, props) => {
    let pictures = Object.values(state.entities.pictures).reverse() || [];
    let user = state.entities.users[state.session.id] || {};
    return {
        pictures: pictures,
        user: user
    };
};


const mdp = (dispatch) => {

    return {    
        fetchPictures: () => dispatch(fetchPictures()),
        closeModal: () => dispatch(closeModal('close')),
        openModal: (e) => {
            if (e.preventDefault) e.preventDefault(); 
            return dispatch(openModal('open-upload-modal'));
        },
        logout: () => dispatch(logout())
    };
};



export default connect(msp, mdp)(Feed);