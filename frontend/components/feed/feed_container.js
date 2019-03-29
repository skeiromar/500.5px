import {connect} from 'react-redux';
import Feed from './feed';
import {fetchPictures} from '../../actions/picture_actions';

const msp = (state, props) => {
    console.log(state);
    // let pic = sta
    return {
        
    };
};


const mdp = (dispatch) => {

    return {    
        fetchPictures: () => dispatch(fetchPictures())
    };
};



export default connect(msp, mdp)(Feed);