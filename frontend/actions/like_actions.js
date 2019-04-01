
import * as LikeApiUtils from '../util/like_api_utils';
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";



export const createLike = like => dispatch => (
    LikeApiUtils.createLike(like)
    .then(like => dispatch(receiveLike(like)))
);

export const deleteLike = like => dispatch => (
    LikeApiUtils.deleteLike(like)
    .then(() => dispatch(removeLike(like.id)))
);


const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});


const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
});