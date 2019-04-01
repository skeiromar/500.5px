@comments.each do |comment|
    json.set! comment.id do
        # json.extract! picture, :id, :title, :description
        # json.extract! picture.author, :username
        # json.profilePictureUrl url_for(picture.author.profile_picture)
        # json.pictureUrl url_for(picture.picture)
        # json.numLikes picture.likers.length 
        # json.likerIds picture.likers.ids
        json.extract! comment, :id, :author_id, :picture_id, :body
        json.username comment.author.username       
        json.username_pic url_for(comment.author.profile_picture)
        json.likerIds comment.likers.ids
        json.numLikes comment.likers.length 

    end
  end