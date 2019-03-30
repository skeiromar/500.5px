json.extract! @user, :username, :id, :email, :follower_ids, :followed_ids
json.pictureUrl url_for(@user.profile_picture)