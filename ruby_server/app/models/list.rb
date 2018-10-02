class List < ApplicationRecord
  validates :title, length: { maximum: 10 }

  has_many :items
end
