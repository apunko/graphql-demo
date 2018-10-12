interface TTodoItem {
  id: number;
  title: string;
}

interface TTodoList {
  id: number;
  title: string;
  todoItems: [TTodoItem];
}
