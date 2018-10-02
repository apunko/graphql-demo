class List < ApplicationRecord
  validates :title, length: { maximum: 10 }

end
