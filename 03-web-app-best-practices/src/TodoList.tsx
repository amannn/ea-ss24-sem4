import {Todo} from './App';
import TodoListItem from './TodoListItem';
// import styles from './TodoList.module.css';

type Props = {
  todos: Array<Todo>;
  onCompleteTodo(id: number): void;
};

export default function TodoList({todos, onCompleteTodo}: Props) {
  return (
    <ul>
      {todos.map((todo, index) => {
        const isFirst = index === 0;

        return (
          <TodoListItem
            isHighlighted={isFirst}
            key={todo.id}
            todo={todo}
            onCompleteTodo={() => onCompleteTodo(todo.id)}
          />
        );
      })}
    </ul>
  );
}
