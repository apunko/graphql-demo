module Types
  class TodoItemType < Types::BaseObject
    description "A todo item"

    field :id, ID, "The id of the item", null: false
    field :title, String, "The title of the item", null: false
  end
end
