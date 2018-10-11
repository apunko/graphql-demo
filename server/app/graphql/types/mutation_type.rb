# frozen_string_literal: true

require_relative 'todo_list_type'
require_relative 'todo_item_type'

module Types
  class MutationType < Types::BaseObject
    graphql_name 'Mutation'

    field :createTodo, Types::TodoListType, null: false, resolver: Resolvers::CreateTodoResolver do
      argument :title, String, required: true
    end

    field :createTodoItem, Types::TodoItemType, null: false, resolver: Resolvers::CreateTodoItemResolver do
      argument :todo_id, ID, required: true
      argument :title, String, required: true
    end

    field :destroyTodo, Types::TodoListType, null: false, resolver: Resolvers::DestroyTodoResolver do
      argument :id, ID, required: true
    end

    field :destroyTodoItem, Types::TodoItemType, null: false, resolver: Resolvers::DestroyTodoItemResolver do
      argument :id, ID, required: true
    end

    field :updateTodo, Types::TodoListType, null: false, resolver: Resolvers::UpdateTodoResolver do
      argument :id, ID, required: true
      argument :title, String, required: true
    end

    field :updateTodoItem, Types::TodoItemType, null: false, resolver: Resolvers::UpdateTodoItemResolver do
      argument :id, ID, required: true
      argument :title, String, required: true
    end
  end
end
