interface TUpdateTodoItemResult { 
  data: {
    updateTodoItem: TTodoItem
  }
}

interface TUpdateTodoResult { 
  data: {
    updateTodo: TTodoList,
  }
}

interface TCreateTodoResult { 
  data: {
    createTodo: TTodoList,
  }
}
