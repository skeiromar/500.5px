# t.string "title", null: false
# t.string "description", null: false
# t.integer "author_id", null: false
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
class Picture < ApplicationRecord 
    
    belongs_to :author, class_name: "User", foreign_key: "author_id"

    validate :ensure_picture

    
    has_one_attached :picture

    def ensure_picture 
        unless self.picture.attached? 
            errors[:picture] << "Picture must be attached"
        end
    end 

end
