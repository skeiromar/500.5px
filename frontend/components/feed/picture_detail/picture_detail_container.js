
import { connect } from 'react-redux';

import PictureDetail from './picture_detail';
import { fetchPicture } from '../../../actions/picture_actions';

const mapStateToProps = (state, ownProps) => {
  const picture = state.entities.pictures[ownProps.match.params.pictureId];
  let user = state.entities.users[state.session.id[0]] || {};
  // when doing loading icon, look in pokemon_detail_container
  return {
    picture: picture,
    user: user
  };
};

const mapDispatchToProps = dispatch => ({
  requestPicture: id => dispatch(fetchPicture(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureDetail);