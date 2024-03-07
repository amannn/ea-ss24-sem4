export default class TodoList {
  node: HTMLUListElement;

  constructor(node: HTMLUListElement) {
    this.node = node;
    // Optionally bind and guarantee the context of the add method
    // this.add = this.add.bind(this);
  }

  add(todo: string) {
    const item = document.createElement('li');
    item.innerHTML = `
      <label>
        <input type="checkbox">
        ${todo}
      </label>
    `;

    // Concern 3: Delete items
    item.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;

      if (target.tagName === 'INPUT') {
        this.node.removeChild(item);
      }
    });

    // Concern 2 (continued)
    this.node.appendChild(item);
  }
}
