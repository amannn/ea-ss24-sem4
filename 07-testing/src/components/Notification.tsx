'use client';

import {Toast, ToastTitle} from '@radix-ui/react-toast';
import {ReactNode, useState} from 'react';
import Text from './Text';
import IconButton from './IconButton';
import {
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

type Props = {
  children: ReactNode;
  type?: 'error' | 'success';
};

export default function Notification({children, type}: Props) {
  const [open, setOpen] = useState(true);

  function onClose() {
    setOpen(false);
  }

  return (
    <Toast
      className="bg-white flex items-center justify-between rounded-md shadow-lg data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
      open={open}
      onOpenChange={setOpen}
      duration={Number.POSITIVE_INFINITY}
    >
      <ToastTitle className="flex gap-2 p-4">
        {type === 'error' ? (
          <ExclamationTriangleIcon className="text-red-600 w-6" />
        ) : (
          <InformationCircleIcon className="text-green-600 w-6" />
        )}
        <Text>{children}</Text>
      </ToastTitle>
      <IconButton aria-label="Close" onClick={onClose}>
        <XMarkIcon />
      </IconButton>
    </Toast>
  );
}
