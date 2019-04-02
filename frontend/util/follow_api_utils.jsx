


// follow = { follower_id: 1, followed_id: 3}
export const createFollow = (follow) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${follow.follower_id}/follow`,
        data: { follow }
    });
};



export const deleteFollow = (follow) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/users/${follow.follower_id}/unfollow`,
        data: { follow }
    });
};