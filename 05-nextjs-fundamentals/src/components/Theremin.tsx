import {useEffect, useRef, useState} from 'react';
import Sound from './utils/Sound';

export default function Theremin() {
  // React state <- external events
  const mouseWindowPosition = useMouseWindowPosition();
  const isMouseDown = useMouseDown();
  const isSpacePressed = useKeyDown('Space');

  // Compute derived state
  const isActive = isMouseDown && isSpacePressed;

  // React state -> imperative APIs
  useTheremin(isActive, mouseWindowPosition);
  useDiscoBackground(isActive);

  let emoji;
  if (isActive) {
    emoji = '💃🏻🕺🪩';
  } else if (isSpacePressed || isMouseDown) {
    emoji = '🤔';
  } else {
    emoji = '🙄';
  }

  return (
    <p
      style={{
        fontSize: 100,
        textAlign: 'center',
        userSelect: 'none'
      }}
    >
      {emoji}
    </p>
  );
}

function useMouseWindowPosition() {
  const [pos, setPos] = useState<{px: number; py: number}>();

  useEffect(() => {
    function onMouseMove(event: MouseEvent) {
      setPos({
        px: event.clientX / window.innerWidth,
        py: 1 - event.clientY / window.innerHeight
      });
    }

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return pos;
}

function useKeyDown(code: string) {
  const [isKeyDown, setIsKeyDown] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.code === code) {
        setIsKeyDown(true);
      }
    }

    function onKeyUp(event: KeyboardEvent) {
      if (event.code === code) {
        setIsKeyDown(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [code]);

  return isKeyDown;
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

function useTheremin(
  isActive: boolean,
  pos?: {
    px: number;
    py: number;
  }
) {
  const soundRef = useRef<Sound>();

  useEffect(() => {
    if (!isActive) return;

    const sound = new Sound();
    soundRef.current = sound;

    return () => {
      sound.dispose();
    };
  }, [isActive]);

  useEffect(() => {
    const sound = soundRef.current;
    if (!sound || !pos) return;

    if (!sound.isPlaying) {
      sound.play();
    }

    const {px, py} = pos;

    const minFrequency = 440;
    const maxFrequency = 440 * 3;
    const frequency = minFrequency + (maxFrequency - minFrequency) * px;

    sound.setFrequency(frequency);
    sound.setGain(py);
  }, [pos]);
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
