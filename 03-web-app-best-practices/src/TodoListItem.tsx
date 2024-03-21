import {Todo} from './App';
import {useFormatter} from 'use-intl';
import styles from './TodoListItem.module.css';

type Props = {
  // className?: string;
  isHighlighted: boolean;
  todo: Todo;
  onCompleteTodo(): void;
};

export default function TodoListItem({
  isHighlighted,
  todo,
  onCompleteTodo
}: Props) {
  const format = useFormatter();

  let className = styles.root;
  if (isHighlighted) {
    className += ' ' + styles.highlighted;
  } else {
    className += ' ' + styles.default;
  }

  return (
    <li>
      <label className={className}>
        <input type="checkbox" onClick={onCompleteTodo} />
        {todo.text} ({format.dateTime(todo.createdAt)})
      </label>
    </li>
  );
}
