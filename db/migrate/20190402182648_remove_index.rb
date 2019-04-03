class RemoveIndex < ActiveRecord::Migration[5.2]
  def change

    remove_index :follows, [:follower_id, :followed_id]
  end
end
