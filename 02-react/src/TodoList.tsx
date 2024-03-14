import {Todo} from './App';
import TodoListItem from './TodoListItem';

type Props = {
  todos: Array<Todo>;
  onCompleteTodo(id: number): void;
};

export default function TodoList({todos, onCompleteTodo}: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCompleteTodo={() => onCompleteTodo(todo.id)}
        />
      ))}
    </ul>
  );
}
