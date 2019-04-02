
import * as CommentApiUtils from '../util/comment_api_utils';
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";


export const createComment = comment => dispatch => (
    CommentApiUtils.createComment(comment)
    .then(id => {
        return dispatch(receiveComment({
            id: id, 
            authorId: comment.author_id, 
            pictureId: comment.picture_id, 
            body: comment.body,
            username: comment.username,
            username_pic: comment.username_pic,
            likerIds: [],
            numLikes: 0
        }));
    }
));

export const fetchAllComments = id => dispatch => (
    CommentApiUtils.fetchAllComments(id)
    .then(comments => {
        return dispatch(receiveAllComments(comments));
    }
));


export const deleteComment = id => dispatch => (
    CommentApiUtils.deleteComment(id)
    .then(() => {
        return dispatch(removeComment(id));
    }
));

const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS, 
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});


const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

