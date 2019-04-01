
import { connect } from 'react-redux';

import PictureDetail from './picture_detail';
import { fetchPicture, deletePicture } from '../../../actions/picture_actions';
import { createLike, deletePictureLike } from '../../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
  const picture = state.entities.pictures[ownProps.match.params.pictureId];
  let user = state.entities.users[state.session.id[0]] || {};
  // when doing loading icon, look in pokemon_detail_container'
  return {
    picture: picture,
    user: user
  };
};

const mapDispatchToProps = dispatch => ({
  requestPicture: id => dispatch(fetchPicture(id)),
  deletePicture: id => dispatch(deletePicture(id)),
  createLike: like => dispatch(createLike(like)),
  deletePictureLike: like => dispatch(deletePictureLike(like)),
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureDetail);