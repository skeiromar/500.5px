json.array! @pictures do |picture|
    json.extract! picture, :id, :title, :description
    json.pictureUrl url_for(picture.picture)
end
