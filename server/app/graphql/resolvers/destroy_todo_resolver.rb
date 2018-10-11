module Resolvers
  class DestroyTodoResolver < BaseResolver
    def resolve(args)
      Todo.destroy(args[:id])
    end
  end
end
