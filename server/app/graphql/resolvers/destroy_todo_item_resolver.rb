# frozen_string_literal: true

module Resolvers
  class DestroyTodoItemResolver < BaseResolver
    def resolve(args)
      TodoItem.destroy(args[:id])
    end
  end
end
