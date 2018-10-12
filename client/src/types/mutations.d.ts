interface TUpdateTodoItemResult { 
  data: {
    updateTodoItem: TTodoItem;
  }
}

interface TUpdateTodoResult { 
  data: {
    updateTodo: TTodoList;
  }
}

interface TCreateTodoResult { 
  data: {
    createTodo: TTodoList;
  }
}

interface TCreateTodoItemResult { 
  data: {
    createTodoItem: TTodoItem;
  }
}

interface TDestroyTodoItemResult { 
  data: {
    destroyTodoItem: TTodoList;
  }
}
