module Resolvers
  class CreateTodoResolver < BaseResolver
    type Types::TodoList, null: false

    def resolve(title)
      Todo.create(title)
    end
  end
end
