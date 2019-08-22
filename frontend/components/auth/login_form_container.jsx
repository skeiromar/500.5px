import {connect} from 'react-redux';
import {login, receiveErrors, clearErrors, receiveSessionErrors} from '../../actions/session_actions';
import SessionForm from './sessionForm';
import {closeModal, openModa} from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const session_errors = state.errors.session;
  let formType = "login";
  return {errors: session_errors, formType}
}

const mdp = dispatch => {

  return {
    processForm: {
      login: (user) => dispatch(login(user))
    },
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors))

  };
};

export default connect(msp, mdp)(SessionForm);