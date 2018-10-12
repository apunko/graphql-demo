# frozen_string_literal: true

module Resolvers
  class UpdateTodoResolver < BaseResolver
    def resolve(args)
      Todo.update(args[:id], args)
    end
  end
end
