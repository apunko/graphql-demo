# frozen_string_literal: true

module Resolvers
  class CreateTodoResolver < BaseResolver
    def resolve(args)
      Todo.create(args)
    end
  end
end
