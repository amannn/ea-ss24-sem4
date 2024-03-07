export default class AddTodoForm {
  onSubmit: (todo: string) => void;

  constructor(node: HTMLFormElement, onSubmit: (todo: string) => void) {
    this.onSubmit = onSubmit;

    node.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = new FormData(node);

      // Type assertion (compile time)
      const todo = data.get('todo') as string;

      // Narrowing (runtime)
      // if (typeof todo !== 'string') return;

      this.onSubmit(todo);

      node.reset();
    });
  }
}
