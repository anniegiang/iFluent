class Language < ApplicationRecord
    validates :language, presence: true
end
