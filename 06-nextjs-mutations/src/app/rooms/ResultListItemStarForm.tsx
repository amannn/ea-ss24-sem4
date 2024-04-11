'use client';

import Notification from '@/components/Notification';
import {ReactNode} from 'react';
import {useFormState} from 'react-dom';

type Props = {
  children: ReactNode;
  onSubmit: (state, data: FormData) => Promise<any>;
};

export default function ResultListItemStarForm({children, onSubmit}: Props) {
  // `state`: Return value of Server Action
  const [state, formAction] = useFormState(onSubmit, undefined);
  // const [state, setState]   = useState(              initialState)

  const hasResponse = state !== undefined;
  const hasError = hasResponse && state.status !== 200;

  // Alternative with click handler
  // BUT: Doesn't work without JS (progressive enhancement)
  // function onClick() {
  //   onSubmit().then(result => {
  //     setResult(result);
  //   })
  // }

  return (
    <form action={formAction} className="absolute top-0 right-0">
      {children}
      {hasError && (
        <Notification type="error">
          An unexpected error occured, please try again later.
        </Notification>
      )}
    </form>
  );
}
