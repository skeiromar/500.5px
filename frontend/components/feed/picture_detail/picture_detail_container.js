
import { connect } from 'react-redux';

import PictureDetail from './picture_detail';
import { fetchPicture, deletePicture } from '../../../actions/picture_actions';
import { createLike, deletePictureLike, deleteCommentLike } from '../../../actions/like_actions';
import {createComment, fetchAllComments} from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  const picture = state.entities.pictures[ownProps.match.params.pictureId];
  let user = state.entities.users[state.session.id] || {};
  let comments = Object.values(state.entities.comments);
  // when doing loading icon, look in pokemon_detail_container'
  return {
    picture: picture,
    user: user,
    comments: comments,
    pictureIds: state.ui.pictureIds,
  };
};

const mapDispatchToProps = dispatch => ({
  requestPicture: id => dispatch(fetchPicture(id)),
  deletePicture: id => dispatch(deletePicture(id)),
  createLike: like => dispatch(createLike(like)),
  deletePictureLike: like => dispatch(deletePictureLike(like)),
  createComment: comment => dispatch(createComment(comment)),
  fetchAllComments: id => dispatch(fetchAllComments(id)),
  deleteCommentLike: like => dispatch(deleteCommentLike(like)),  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureDetail);