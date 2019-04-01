# == Schema Information
#
# Table name: likes
#
#  id           :bigint(8)        not null, primary key
#  author_id    :integer
#  likable_type :string
#  likable_id   :bigint(8)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Like < ApplicationRecord 
    belongs_to :author, class_name: "User", foreign_key: "author_id"
    belongs_to :likable, polymorphic: true
    
end
