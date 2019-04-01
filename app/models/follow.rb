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

    belongs_to :follower, class_name: "User", foreign_key: "follower_id"
    belongs_to :followed, class_name: "User", foreign_key: "followed_id"

    # user has many followers 
    # user has many followed 

    # backend process
    # 1. 
    


end
