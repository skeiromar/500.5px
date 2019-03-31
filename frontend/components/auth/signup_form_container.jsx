import { connect } from 'react-redux';
import { signup, receiveErrors, receiveSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const msp = (state, ownProps) => {
    const session_errors = state.errors.session;
    let formType = "signup";
    return {
        errors: session_errors,
        formType
    }
}


const mdp = thunkCaller => {

    return {
        processForm: { signup: (user) => thunkCaller(signup(user)) },
        receiveErrors: (errors) => thunkCaller(receiveErrors(errors)),
        receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors))
    }
}

export default connect(msp, mdp)(SessionForm);