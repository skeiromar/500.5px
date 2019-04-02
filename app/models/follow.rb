# == Schema Information
#
# Table name: follows
#
#  id          :bigint(8)        not null, primary key
#  follower_id :integer          not null
#  followed_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

# t.integer "follower_id", null: false
# t.integer "followed_id", null: false

class Follow < ApplicationRecord 

    validates :followed_id, uniqueness: {scope: :follower_id}

    belongs_to :follower, class_name: "User", foreign_key: "follower_id"
    belongs_to :followed, class_name: "User", foreign_key: "followed_id"

    
    validate :ensure_follower_not_followed 

    # user has many followers 
    # user has many followed 
    
    # backend process
    # 1. 
    
    def ensure_follower_not_followed 
        if follower_id == followed_id 
            errors[:follower_id] << 'cannot follow yourself.'
        end

    end


end
