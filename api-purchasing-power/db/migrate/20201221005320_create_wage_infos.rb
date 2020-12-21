class CreateWageInfos < ActiveRecord::Migration[6.0]
  def change
    create_table :wage_infos do |t|
      t.references :country, null: false, foreign_key: true
      t.integer :year_of_wage
      t.float :min_wage
      t.string :symbol

      t.timestamps
    end
  end
end
