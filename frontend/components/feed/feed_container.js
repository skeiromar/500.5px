import {connect} from 'react-redux';
import Feed from './feed';
import {fetchPictures} from '../../actions/picture_actions';
import {openModal, closeModal} from '../../actions/modal_actions';

const msp = (state, props) => {
    console.log(state);
    let pictures = Object.values(state.entities.pictures) || [];
    return {
        pictures: pictures,
    };
};


const mdp = (dispatch) => {

    return {    
        fetchPictures: () => dispatch(fetchPictures()),
        closeModal: () => dispatch(closeModal('close')),
        openModal: (e) => {
            e.preventDefault(); 
            return dispatch(openModal('open-upload-modal'));
        }
    };
};



export default connect(msp, mdp)(Feed);