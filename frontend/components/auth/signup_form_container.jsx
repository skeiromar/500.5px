import {connect} from 'react-redux';
import {signup, receiveErrors, receiveSessionErrors, clearErrors} from '../../actions/session_actions';
import SessionForm from './sessionForm';


const msp = (state, ownProps) => {
  const session_errors = state.errors.session;
  let formType = "signup";
  return {errors: session_errors, formType}
}

const mdp = dispatch => {

  return {
    processForm: {
      signup: (user) => dispatch(signup(user))
    },
    clearErrors: () => dispatch(clearErrors()),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors))
  };
};

export default connect(msp, mdp)(SessionForm);