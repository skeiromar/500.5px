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
    
    has_many :likes, as: :likable
    
end
