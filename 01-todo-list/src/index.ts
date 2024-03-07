import AddTodoForm from './AddTodoForm.js';
import TodoList from './TodoList.js';

const listNode = document.getElementById('list') as HTMLUListElement;
const todoList = new TodoList(listNode);

const formNode = document.getElementById('form') as HTMLFormElement;
new AddTodoForm(formNode, (todo) => {
  todoList.add(todo);
});
