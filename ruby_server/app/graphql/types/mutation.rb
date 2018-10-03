Types::Mutation = GraphQL::ObjectType.define do
  name 'Mutation'

  field :createList,
    description: 'Create todo list',
    function: Resolvers::CreateList.new

  field :renameList,
    description: 'Rename existing list',
    function: Resolvers::RenameList.new

  field :destroyList,
    description: 'Destroy existing list',
    function: Resolvers::DestroyList.new

  field :createItem,
    description: 'Create todo item',
    function: Resolvers::CreateItem.new

  field :updateItem,
    description: 'Update existing todo item',
    function: Resolvers::UpdateItem.new

  field :destroyItem,
    description: 'Destroy existing item',
    function: Resolvers::DestroyItem.new
end
