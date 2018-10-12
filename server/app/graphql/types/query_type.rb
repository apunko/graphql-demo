# frozen_string_literal: true

require_relative 'todo_list_type'

module Types
  class QueryType < Types::BaseObject
    graphql_name 'Query'

    field :allTodos, [Types::TodoListType], null: false, resolver: Resolvers::AllTodosResolver

    field :todo, Types::TodoListType, null: false, resolver: Resolvers::TodoResolver do
      argument :id, ID, required: true
    end
  end
end
