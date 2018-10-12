# frozen_string_literal: true

module Resolvers
  class CreateTodoItemResolver < BaseResolver
    def resolve(args)
      TodoItem.create(args)
    end
  end
end
