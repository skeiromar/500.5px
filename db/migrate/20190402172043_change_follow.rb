class ChangeFollow < ActiveRecord::Migration[5.2]
  def change
    remove_index :follows, [:followed_id, :follower_id]
  end
end
