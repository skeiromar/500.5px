

export const requestPictures = () => {
    return $.ajax({
        method: "GET",
        url: `api/pictures`,
    });
};


