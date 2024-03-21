import {FormEvent} from 'react';
import {useTranslations} from 'use-intl';
import styles from './AddTodoForm.module.css';

type Props = {
  onSubmit(text: string): void;
};

export default function AddTodoForm({onSubmit}: Props) {
  const t = useTranslations('AddTodoForm');

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
    <form className={styles.root} onSubmit={onFormSubmit}>
      <input
        className={styles.input}
        name="text"
        placeholder={t('placeholder')}
      />
      <button className={styles.button}>{t('submit')}</button>
    </form>
  );
}
