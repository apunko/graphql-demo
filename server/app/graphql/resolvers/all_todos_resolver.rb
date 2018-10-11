module Resolvers
  class AllTodosResolver < BaseResolver
    def resolve
      Todo.all
    end
  end
end
