class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :object_name
      t.text :description
      t.date :insertion_date
      t.references :product_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
