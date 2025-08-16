class AddSuperuserToUsers < ActiveRecord::Migration[8.0]
  def change
    add_column :users, :superuser, :boolean
  end
end
