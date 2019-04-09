

export const deletePictureLike = like => {
    return $.ajax({
      url: `api/pictures/${like.likable_id}/unlike`,
      method: 'DELETE',
      data: {like}
    });
};

export const deleteCommentLike = like => {
  return $.ajax({
    url: `/api/comments/${like.likable_id}/unlike`,
    method: 'DELETE',
    data: {like}
  });
};

export const createPictureLike = like => {
  return $.ajax({
    url: `api/pictures/${like.likable_id}/like`,
    method: 'POST',
    data: {like}
  });
};

export const createCommentLike = like => {
  return $.ajax({
    url: `/api/comments/${like.likable_id}/like`,
    method: 'POST',
    data: {like}
  });
};