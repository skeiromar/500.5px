class RemoveIndex < ActiveRecord::Migration[5.2]
  def change

    remove_index :follows, name: "index_follows_on_followed_id_and_follower_id"
  end
end
