class CreateBmis < ActiveRecord::Migration[6.0]
  def change
    create_table :bmis do |t|
      t.references :country, null: false, foreign_key: true
      t.datetime :date
      t.float :local_price
      t.float :dollar_ex
      t.float :dollar_price
      t.float :dollar_ppp
      t.float :dollar_valuation
      t.float :dollar_adj_valuation
      t.float :euro_adj_valuation
      t.timestamps
    end
  end
end
