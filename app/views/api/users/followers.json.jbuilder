@followers.each do |follow|
    json.set! follow.id do
        json.extract! follow, :id, :username, :followed_ids
        json.pfp url_for(follow.profile_picture)
        # json.likerIds picture.likers.ids
    end
  end