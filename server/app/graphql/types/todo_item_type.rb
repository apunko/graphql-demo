class Types::TodoItem < Types::BaseObject
  description "A todo item"

  field :id, ID, "The id of the item"
  field :title, String, "The title of the item", null: false
end
