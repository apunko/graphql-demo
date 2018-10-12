# frozen_string_literal: true

module Types
  class TodoItemType < Types::BaseObject
    description 'A todo item'

    field :id, Int, 'The id of the item', null: false
    field :title, String, 'The title of the item', null: false
  end
end
