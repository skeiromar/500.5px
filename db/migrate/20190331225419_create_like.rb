class CreateLike < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :author_id
      t.references :likable, polymorphic: true, index: true
      t.timestamps

    end
  end
end
