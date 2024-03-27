import {useEffect, useState} from 'react';

export default function Theremin() {
  const isActive = useMouseDown();

  return (
    <p
      style={{
        fontSize: 100,
        textAlign: 'center',
        userSelect: 'none'
      }}
    >
      {isActive ? '💃🏻🕺🪩' : '🙄'}
    </p>
  );
}

function useMouseDown() {
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    function onMouseDown() {
      setIsMouseDown(true);
    }

    function onMouseUp() {
      setIsMouseDown(false);
    }

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Remember to always clean up event listeners
    // if you register them in an effect
    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);
  // An empty array means this effect will only run
  // once, after the first render of this component.

  return isMouseDown;
}
