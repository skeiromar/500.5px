


// follow = { follower_id: 1, followed_id: 3}
export const followUser = (follow) => {
    return $.ajax({
        url: `/api/users/${follow.follower_id}/follows`,
        method: 'POST',
        data: { follow }
    });
};


