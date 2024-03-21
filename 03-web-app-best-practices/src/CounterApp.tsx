import {useState} from 'react';

export default function CounterApp() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function onCountChange(nextCount: number) {
    if (nextCount >= 0) {
      setCount1(nextCount);
    }
  }

  return (
    <>
      <Counter count={count1} onCountChange={onCountChange} />
      <hr />
      <Counter count={count2} onCountChange={setCount2} />
    </>
  );
}

type Props = {
  count: number;
  onCountChange(count: number): void;
};
function Counter({count, onCountChange}: Props) {
  const isOdd = count % 2 !== 0;

  function onIncrement() {
    const nextCount = count + 1;
    onCountChange(nextCount);
  }

  function onDecrement() {
    const nextCount = count - 1;
    onCountChange(nextCount);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>Is odd: {String(isOdd)}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}
