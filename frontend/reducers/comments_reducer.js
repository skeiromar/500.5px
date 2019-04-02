
import merge from 'lodash/merge';
import { RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_ALL_COMMENTS } from '../actions/comment_actions';
import { RECEIVE_COMMENT_LIKE, REMOVE_COMMENT_LIKE } from '../actions/like_actions';

  const PicturesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
      case RECEIVE_ALL_COMMENTS:
        return merge({}, action.comments);
      case RECEIVE_COMMENT:
        return merge({}, oldState, {[action.comment.id]: action.comment});
      case REMOVE_COMMENT:
        let newState = merge({}, oldState);
        delete newState[action.commentId];
        return newState;

      case RECEIVE_COMMENT_LIKE:
        let newerState = merge({}, oldState);
        let comment = newerState[action.like.commentId];  
        
        comment.numLikes += 1;
        comment.likerIds.push(action.like.authorId);
        
        return newerState;

      case REMOVE_COMMENT_LIKE:
        let newestState = merge({}, oldState);
        let comment_del = newestState[action.like.commentId];  
        
        comment_del.numLikes -= 1;
        comment_del.likerIds = comment_del.likerIds.filter(el => el !== action.like.authorId);
        
        return newestState;

      default:
        return oldState;
    }
  };
  
  export default PicturesReducer;