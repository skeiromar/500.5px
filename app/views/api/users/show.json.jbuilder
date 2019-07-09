json.extract! @user, :username, :id, :email
json.pictureUrl url_for(@user.profile_picture)
json.followerIds @user.followed.ids
json.followedIds @user.people_followed.ids
json.backgroundImg url_for(@user.background_img)

