import useMessageBoardModel from './useMessageBoardModel';
import {generateMessage} from './utils/generateMessage';

export type Message = {
  subject: string;
  body: string;
  read: boolean;
};

export default function MessageBoard() {
  // We use object destructuring here, just like we use it regularly
  // for props that are received within a React component.
  const {
    messages,
    unreadMessages,
    createMessage,
    updateMessage,
    markMessageAsRead,
    markMessageAsUnread,
    deleteMessage
  } = useMessageBoardModel();

  return (
    <div>
      <h2>Actions</h2>
      <div>
        <button onClick={() => createMessage(generateMessage())}>
          Add message
        </button>
        <button
          onClick={() => markMessageAsRead(0)}
          disabled={messages.length === 0 || messages[0]?.read}
        >
          Mark first message as read
        </button>
        <button
          onClick={() => markMessageAsUnread(0)}
          disabled={messages.length === 0 || !messages[0]?.read}
        >
          Mark first message as unread
        </button>
        <button
          onClick={() =>
            updateMessage(0, {
              subject: 'Cat fact #1',
              body: 'Cats can jump up to six times their length.'
            })
          }
          disabled={messages.length === 0}
        >
          Update first message
        </button>
        <button
          onClick={() => deleteMessage(0)}
          disabled={messages.length === 0}
        >
          Delete first message
        </button>
      </div>
      <h2>State</h2>
      <p>Unread messages: {unreadMessages.length}</p>
      <pre>{JSON.stringify(messages, null, 2)}</pre>
    </div>
  );
}
