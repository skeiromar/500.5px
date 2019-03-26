import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import SessionForm from './session_form';


const msp = (state, ownProps) => {
    const session_errors = state.errors.session;
    let formType = "login";
    return {
        errors: session_errors,
        formType
    }   
}


const mdp = thunkCaller => {

    return {
        processForm: { login: (user) => thunkCaller(login(user)) }
    }
}

export default connect(msp, mdp)(SessionForm);