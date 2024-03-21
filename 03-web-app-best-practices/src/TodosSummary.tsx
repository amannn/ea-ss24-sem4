import {useTranslations} from 'use-intl';
import {Todo} from './App';

type Props = {
  todos: Array<Todo>;
};

export default function TodosSummary({todos}: Props) {
  const t = useTranslations('TodosSummary');
  return <p>{t('summary', {numTodos: todos.length})}</p>;
}
