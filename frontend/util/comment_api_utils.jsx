


export const fetchAllComments = (id) => {
  return $.ajax({
      method: "GET",
      url: `/api/pictures/${id}/comments`,
  });
};

export const createComment = (comment) => {
    return $.ajax({
        method: "POST",
        url: `/api/pictures/${comment.picture_id}/comments`,
        data: {comment},
    });
};

export const deleteComment = (id) => {
  return $.ajax({
      method: "DELETE",
      url: `/api/comments/${id}`,
  });
};



export const deleteLike = id => (
    $.ajax({
      url: `api/likes/${id}`,
      method: 'DELETE'
    })
);

export const deletePictureLike = comment => {
    return $.ajax({
      url: `api/pictures/${comment.likable_id}/unlike`,
      method: 'DELETE',
      data: {comment}
    });
};