import {useEffect, useState} from 'react';
import Sound from './utils/Sound';

export default function Theremin() {
  const isActive = useMouseDown();

  useTheremin(isActive);
  useDiscoBackground(isActive);

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

function useDiscoBackground(isActive: boolean) {
  useEffect(() => {
    if (!isActive) return;

    const initialBackgroundColor = document.body.style.backgroundColor;

    const interval = setInterval(() => {
      const hue = Math.random() * 360;
      document.body.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;
    }, 1000);

    return () => {
      clearInterval(interval);
      document.body.style.backgroundColor = initialBackgroundColor;
    };
  }, [isActive]);
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

    // Adjust the frequency and gain based on the mouse position
    function onMouseMove(event: MouseEvent) {
      // Normalize the mouse position to a range of 0 … 1
      const px = event.clientX / window.innerWidth;
      const py = 1 - event.clientY / window.innerHeight;

      const minFrequency = 440;
      const maxFrequency = 440 * 3;
      const frequency = minFrequency + (maxFrequency - minFrequency) * px;

      sound.setFrequency(frequency);
      sound.setGain(py);
    }

    window.addEventListener('mousemove', onMouseMove);

    // Always clean up after the party
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
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
