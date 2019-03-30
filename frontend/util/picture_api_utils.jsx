

export const requestPictures = () => {
    return $.ajax({
        method: "GET",
        url: `api/pictures`,
    });
};


export const fetchPictures = () => {
    return $.ajax({
        method: "GET",
        url: `api/pictures`,
    });
};

export const fetchPicture = (pictureId) => {
    return $.ajax({
        method: "GET",
        url: `api/pictures/${pictureId}`,
    });
};


export const createPicture = (picture) => {
    return $.ajax({
        method: "POST",
        url: `api/pictures`,
        data: picture,
        contentType: false,
        processData: false
    });
};


export const updatePicture = picture => (
    $.ajax({
      url: `api/pictures/${picture.id}`,
      method: 'PATCH',
      data: { picture }
    })
);


export const deletePicture = id => (
    $.ajax({
      url: `api/pictures/${id}`,
      method: 'DELETE'
    })
  );