
export const createLike = (like) => {
    return $.ajax({
        method: "POST",
        url: `api/pictures/${like.pictureId}/likes`,
        data: like,
    });
};


export const deleteLike = like => (
    $.ajax({
      url: `api/pictures/${like.pictureId}/likes/${like.id}`,
      method: 'DELETE'
    })
  );