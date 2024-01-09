class RenameTypeInProductTypes < ActiveRecord::Migration[7.1]
  def change
    rename_column :product_types, :type, :name
  end
end
