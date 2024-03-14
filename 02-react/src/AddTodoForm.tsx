import {FormEvent} from 'react';
import './AddTodoForm.css';

type Props = {
  onSubmit(text: string): void;
};

export default function AddTodoForm({onSubmit}: Props) {
  function onFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // event.target (originally triggered the event)
    // event.currentTarget (has the event listener)

    const form = event.currentTarget;
    const data = new FormData(form);
    const value = data.get('text') as string;

    onSubmit(value);

    form.reset();
  }

  return (
    <form className="AddTodoForm" onSubmit={onFormSubmit}>
      <input className="AddTodoForm-input" name="text" />
      <button className="AddTodoForm-button">Submit</button>
    </form>
  );
}
