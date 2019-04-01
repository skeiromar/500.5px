
export const createLike = (like) => {
    return $.ajax({
        method: "POST",
        url: `api/likes`,
        data: {like},
    });
};


export const deleteLike = id => (
    $.ajax({
      url: `api/likes/${id}`,
      method: 'DELETE'
    })
);

export const deletePictureLike = like => {
    return $.ajax({
      url: `api/pictures/${like.likable_id}/unlike`,
      method: 'DELETE',
      data: {like}
    });
};