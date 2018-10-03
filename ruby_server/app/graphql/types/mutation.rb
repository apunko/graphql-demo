Types::Mutation = GraphQL::ObjectType.define do
  name 'Mutation'

  field :createTodoList,
    description: 'Create todo list',
    function: Resolvers::CreateList.new

  field :renameTodoList,
    description: 'Rename existing list',
    function: Resolvers::RenameList.new

  field :destroyTodoList,
    description: 'Destroy existing list',
    function: Resolvers::DestroyList.new

  field :createTodoItem,
    description: 'Create todo item',
    function: Resolvers::CreateItem.new

  field :updateTodoItem,
    description: 'Update existing todo item',
    function: Resolvers::UpdateItem.new

  field :destroyTodoItem,
    description: 'Destroy existing item',
    function: Resolvers::DestroyItem.new
end
