import {useEffect, useState} from 'react';
import Sound from './utils/Sound';

export default function Theremin() {
  const isActive = useMouseDown();
  useTheremin(isActive);

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

function useTheremin(isActive: boolean) {
  useEffect(() => {
    // When `isActive` is `false`, don't do anything.
    // An easy way to implement this is to return early.
    if (!isActive) return;

    // When it is `true`, play a sound
    const sound = new Sound();
    sound.setFrequency(440);
    sound.setGain(0.5);
    sound.play();

    // Always clean up after the party
    return () => {
      sound.dispose();
    };
  }, [isActive]);
  // Since `isActive` is present in this array (aka. it's a "dependency" of this effect),
  // this effect will run initially, and then every time `isActive` changes.
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
