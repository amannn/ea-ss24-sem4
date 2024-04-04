type Props = {
  isActive: boolean;
  isSpacePressed: boolean;
  isMouseDown: boolean;
};

export default function ThereminEmoji({
  isActive,
  isSpacePressed,
  isMouseDown
}: Props) {
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
