import {connect} from 'react-redux';

import PictureEdit from './picture_edit';
import {fetchPicture, updatePicture, receiveEditErrors} from '../../../actions/picture_actions';

const mapStateToProps = (state, ownProps) => {
  const picture = state.entities.pictures[ownProps.match.params.pictureId] || {
    empty: true
  };
  const edit_errors = state.errors.edit;
  //   let user = state.entities.users[state.session.id[0]] || {}; when doing
  // loading icon, look in pokemon_detail_container
  return {
    picture: picture, errors: edit_errors,
    // user: user
  };
};

const mapDispatchToProps = dispatch => ({
  requestPicture: id => dispatch(fetchPicture(id)),
  receiveEditErrors: (errors) => dispatch(receiveEditErrors(errors)),
  updatePicture: picture => dispatch(updatePicture(picture))
});

export default connect(mapStateToProps, mapDispatchToProps)(PictureEdit);