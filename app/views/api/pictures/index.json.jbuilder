@pictures.each do |picture|
    json.set! picture.id do
        json.extract! picture, :id
        json.author picture.author.username
        json.author_id picture.author.id
        json.authorProfilePicture url_for(picture.author.profile_picture)
        json.pictureUrl url_for(picture.picture)
        json.numLikes picture.likers.length 

        # json.likerIds picture.likers.ids
    end
  end