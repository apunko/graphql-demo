# frozen_string_literal: true

module Resolvers
  class UpdateTodoItemResolver < BaseResolver
    def resolve(args)
      TodoItem.update(args[:id], args)
    end
  end
end
