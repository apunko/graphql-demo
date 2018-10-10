require_relative 'todo_list_type'

module Types
  class MutationType < Types::BaseObject
    graphql_name 'Mutation'

    field :createTodo, Types::TodoList, null: false, resolver: Resolvers::CreateTodoResolver do
      argument :title, String, required: true
    end
  end
end
