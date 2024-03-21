// App
// ---
// 3 concerns
// - AddTodoForm
// - TodoList
// - TodoListItem (check todo items)

import {useState} from 'react';
import {IntlProvider} from 'use-intl';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import TodosSummary from './TodosSummary';
import LocalePicker from './LocalePicker';

// state
// - list of todos (derive: how many todos)

export type Todo = {
  id: number;
  text: string;
  createdAt: Date;
};

const messagesByLocale = {
  en: {
    AddTodoForm: {
      placeholder: "What's next?",
      submit: 'Submit!'
    },
    TodosSummary: {
      summary:
        '{numTodos, plural, =0 {Nothing to do} =1 {One todo} other {{numTodos} todos}}'
    }
  },
  de: {
    AddTodoForm: {
      placeholder: 'Was steht an?',
      submit: 'Abschicken'
    },
    TodosSummary: {
      summary:
        '{numTodos, plural, =0 {Nichts zu tun} =1 {Ein Todo} other {{numTodos} Todos}}'
    }
  }
};

let curId = 0;

export default function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [locale, setLocale] = useState<'en' | 'de'>('en');

  console.log(locale);

  function onSubmit(text: string) {
    const id = curId++;

    const nextTodos = todos.concat({
      id: id,
      text: text,
      createdAt: new Date()
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

  return (
    <IntlProvider
      locale={locale}
      messages={messagesByLocale[locale]}
      timeZone="Europe/Vienna"
    >
      <div>
        <AddTodoForm onSubmit={onSubmit} />
        <TodoList onCompleteTodo={onCompleteTodo} todos={todos} />
        <TodosSummary todos={todos} />
      </div>
      <LocalePicker onLocaleChange={setLocale} />
    </IntlProvider>
  );
}
