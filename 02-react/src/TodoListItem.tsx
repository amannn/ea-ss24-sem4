import {Todo} from './App';

type Props = {
  todo: Todo;
  onCompleteTodo(): void;
};

export default function TodoListItem({todo, onCompleteTodo}: Props) {
  return (
    <li>
      <label>
        <input type="checkbox" onClick={onCompleteTodo} />
        {todo.text}
      </label>
    </li>
  );
}
