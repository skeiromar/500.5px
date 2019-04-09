
import * as LikeApiUtils from '../util/like_api_utils';
export const RECEIVE_PICTURE_LIKE = "RECEIVE_PICTURE_LIKE";
export const REMOVE_PICTURE_LIKE = "REMOVE_PICTURE_LIKE";
export const RECEIVE_COMMENT_LIKE = "RECEIVE_COMMENT_LIKE";
export const REMOVE_COMMENT_LIKE = "REMOVE_COMMENT_LIKE";





export const deleteCommentLike = like => dispatch => (
    LikeApiUtils.deleteCommentLike(like)
    .then(() => {
        return dispatch(removeCommentLike({authorId: like.author_id, commentId: like.likable_id}));
    }
));


export const deletePictureLike = like => dispatch => (
    LikeApiUtils.deletePictureLike(like)
    .then(() => {
        return dispatch(removePictureLike({authorId: like.author_id, pictureId: like.likable_id}));
    }
));

export const createCommentLike = like => dispatch => (
    LikeApiUtils.createCommentLike(like)
    .then(() => {
        return dispatch(receiveCommentLike({authorId: like.author_id, commentId: like.likable_id}));
    }
));


export const createPictureLike = like => dispatch => (
    LikeApiUtils.createPictureLike(like)
    .then(() => {
        return dispatch(receivePictureLike({authorId: like.author_id, pictureId: like.likable_id}));
    }
));


const receivePictureLike = like => ({
    type: RECEIVE_PICTURE_LIKE,
    like
});


const removePictureLike = like => ({
    type: REMOVE_PICTURE_LIKE,
    like
});

const receiveCommentLike = like => ({
    type: RECEIVE_COMMENT_LIKE,
    like
});


const removeCommentLike = like => ({
    type: REMOVE_COMMENT_LIKE,
    like
});
