@pictures.each do |picture|
    json.set! picture.id do
        json.extract! picture, :id, :title, :description
        json.extract! picture.author, :username
        json.profilePictureUrl url_for(picture.author.profile_picture)
        json.pictureUrl url_for(picture.picture)
        
    end
  end