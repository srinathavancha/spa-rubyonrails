class CreateContactUs < ActiveRecord::Migration[8.0]
  def change
    create_table :contact_us do |t|
      t.string :name, null: false          # User's name, required
      t.string :email, null: false         # User's email, required
      t.string :product_code, null: false  # Product code selected from dropdown, required

      t.timestamps                        # Adds "created_at" and "updated_at" datetime columns automatically
    end

    add_index :contact_us, :product_code  # Index product_code for faster queries (optional but recommended)
  end
end
