// Concern 1: Handle form submit
export default class AddTodoForm {
  constructor(node: HTMLFormElement, onSubmit: (todo: string) => void) {
    node.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = new FormData(node);

      // Type assertion (compile time)
      const todo = data.get('todo') as string;

      // Narrowing (runtime)
      // if (typeof todo !== 'string') return;

      onSubmit(todo);

      node.reset();
    });
  }
}
