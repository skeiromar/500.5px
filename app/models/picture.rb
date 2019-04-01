# == Schema Information
#
# Table name: pictures
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :string           not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

# t.string "title", null: false
# t.string "description", null: false
# t.integer "author_id", null: false
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
class Picture < ApplicationRecord 
    
    belongs_to :author, class_name: "User", foreign_key: "author_id"

    validate :ensure_picture
    has_many :likes, as: :likable

    has_one_attached :picture

    def ensure_picture 
        unless self.picture.attached? 
            errors[:picture] << "Picture must be attached"
        end
    end 

end
