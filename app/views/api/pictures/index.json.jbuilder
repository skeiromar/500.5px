@pictures.each do |picture|
    json.set! picture.id do
        json.extract! picture, :id, :title, :description
        json.pictureUrl url_for(picture.picture)
    end
  end