// App
// ---
// 3 concerns
// - AddTodoForm
// - TodoList
// - TodoListItem (check todo items)

import {useState} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

// state
// - list of todos (derive: how many todos)

export type Todo = {
  id: number;
  text: string;
};

let curId = 0;

export default function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  function onSubmit(text: string) {
    const id = curId++;

    const nextTodos = todos.concat({
      id: id,
      text: text
    });

    setTodos(nextTodos);
  }

  function onCompleteTodo(id: number) {
    const index = todos.findIndex((todo) => todo.id === id);
    const todosBefore = todos.slice(0, index);
    const todosAfter = todos.slice(index + 1);
    const nextTodos = todosBefore.concat(todosAfter);
    setTodos(nextTodos);
  }

  const numTodos = todos.length;

  return (
    <div>
      <AddTodoForm onSubmit={onSubmit} />
      <TodoList onCompleteTodo={onCompleteTodo} todos={todos} />
      <p className={numTodos > 5 ? 'App-todosSummary-long' : undefined}>
        {todos.length} todo(s)
      </p>
    </div>
  );
}
