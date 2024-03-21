import styles from './LocalePicker.module.css';

type Props = {
  onLocaleChange(locale: 'en' | 'de'): void;
};

export default function LocalePicker({onLocaleChange}: Props) {
  return (
    <div className={styles.root}>
      <button onClick={() => onLocaleChange('en')}>en</button>
      <button onClick={() => onLocaleChange('de')}>de</button>
    </div>
  );
}
