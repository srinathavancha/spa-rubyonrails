class AddGrantsToUsers < ActiveRecord::Migration[8.0]
  def change
    add_column :users, :grants, :text
  end
end
