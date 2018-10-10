module Resolvers
  class AllTodosResolver < BaseResolver
    type [Types::TodoList], null: false

    def resolve
      Todo.all
    end
  end
end

