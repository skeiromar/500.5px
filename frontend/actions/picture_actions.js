

import * as PictureApiUtil from '../util/picture_api_utils';

export const RECEIVE_ALL_PICTURES = "RECEIVE_ALL_PICTURES";
export const RECEIVE_PICTURE = "RECEIVE_PICTURE";
export const REMOVE_PICTURE = "REMOVE_PICTURE";

export const fetchPictures = () => dispatch => (
  PictureApiUtil.fetchPictures()
  .then(pictures => dispatch(receiveAllPictures(pictures)))
);

export const fetchPicture = id => dispatch => (
  PictureApiUtil.fetchPicture(id)
  .then(picture => dispatch(receivePicture(picture)))
);

export const createPicture = picture => dispatch => (
  PictureApiUtil.createPicture(picture)
  .then(picture => dispatch(receivePicture(picture)))
);

export const updatePicture = picture => dispatch => (
PictureApiUtil.updatePicture(picture)
.then(picture => dispatch(receivePicture(picture)))
);

export const deletePicture = pictureId => dispatch => (
  PictureApiUtil.deletePicture(pictureId).then(picture => dispatch(removePicture(pictureId)))
);

const receiveAllPictures = pictures => ({
  type: RECEIVE_ALL_PICTURES,
  pictures
});

const receivePicture = picture => ({
  type: RECEIVE_PICTURE,
  picture
});

const removePicture = pictureId => ({
  type: REMOVE_PICTURE,
  pictureId
});