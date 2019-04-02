json.extract! @user, :username, :id, :email
json.pictureUrl url_for(@user.profile_picture)
json.followerIds @user.followers.ids
json.followedIds @user.people_followed.ids