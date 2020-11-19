class Country < ActiveRecord::Base
    validates :abbrev, presence: true
    validates :name, presence: true
end
