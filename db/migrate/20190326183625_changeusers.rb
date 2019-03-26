class Changeusers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :username, :string, null: false
    change_column :users, :password_digest, :string, null: false
    change_column :users, :session_token, :string, null: false



  end

  add_index :users, :username, unique:true
  #Ex:- add_index("admin_users", "username")
  add_index :users, :session_token, unique: true
  #Ex:- add_index("admin_users", "username")
end
