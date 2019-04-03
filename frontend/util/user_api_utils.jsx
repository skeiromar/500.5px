


export const changeProfilePicture = (picture) => {
    return $.ajax({
        url: `/api/users/${picture.currentUserId}`,
        method: 'PATCH',
        data: picture.formData ,
        contentType: false,
        processData: false
    });
};
// changeBackgroundImg

export const changeBackgroundImg = (picture) => {
    return $.ajax({
        url: `/api/users/${picture.currentUserId}`,
        method: 'PATCH',
        data: picture.formData ,
        contentType: false,
        processData: false
    });
};

export const fetchFollowers = id => {
    return $.ajax({    
        url: `/api/users/${id}/followers`,
        method: 'GET',
    });
};

export const fetchFollowed = id => {
    return $.ajax({    
        url: `/api/users/${id}/followed`,
        method: 'GET',
    });
};