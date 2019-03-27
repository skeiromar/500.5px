import {connect} from 'react-redux';
import FeedNav from './feed_nav';
import {logout} from '../../actions/session_actions';

const msp = (state, ownProps) => {

    const currentUser = state.entities.users[state.session.id];
    return {
        currentUser: currentUser
    };
};


const mdp = dispatch => {

    return {
        logout: () => thunkCaller(logout())
    };
};

export default connect(msp, mdp)(FeedNav);