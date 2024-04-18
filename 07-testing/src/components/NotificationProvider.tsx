'use client';

import {ToastProvider, ToastViewport} from '@radix-ui/react-toast';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export default function NotificationProvider({children}: Props) {
  return (
    <ToastProvider>
      {children}
      <ToastViewport className="fixed bottom-0 right-0 flex flex-col gap-2 w-96 max-w-[100vw] [--viewport-padding:_25px] p-[var(--viewport-padding)]" />
    </ToastProvider>
  );
}
