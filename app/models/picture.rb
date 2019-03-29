# t.string "title", null: false
# t.string "description", null: false
# t.integer "author_id", null: false
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
class Picture < ApplicationRecord 
    
    belongs_to :author, class_name: "User", foreign_key: "author_id"

    has_one_attached :picture

end
