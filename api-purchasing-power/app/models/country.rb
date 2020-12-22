class Country < ApplicationRecord
    validates :abbrev, presence: true
    validates :name, presence: true
    has_one :bmis
end
