class Types::TodoList < Types::BaseObject
  description "A list of items which may be completed"

  field :id, ID, "The unique id of this list", null: false
  field :title, String, "The name of this list", null: false
end
