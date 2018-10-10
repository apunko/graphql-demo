module Resolvers
  class TodoResolver < BaseResolver
    type Types::TodoList, null: false

    def resolve(id)
      Todo.find_by(id)
    end
  end
end
