# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer
#  picture_id :integer
#  body       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :body, presence: true 

    has_many :likes, as: :likable
    belongs_to :author, class_name: "User", foreign_key: "author_id"
    belongs_to :picture, class_name: "Picture", foreign_key: "picture_id"

    
end
