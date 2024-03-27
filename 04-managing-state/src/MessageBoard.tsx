import {useState} from 'react';
import {generateMessage} from './utils/generateMessage';

type Message = {
  subject: string;
  body: string;
  read: boolean;
};

export default function MessageBoard() {
  const [messages, setMessages] = useState<Array<Message>>([]);
  const unreadMessages = messages.filter((message) => !message.read);

  function createMessage(message: Message) {
    setMessages([message, ...messages]);
  }

  function updateMessage(
    index: number,
    /**
     * `Partial` is a utility type in TypeScript that receives a type and makes
     * all properties optional. We use it here to create a generic update
     * function. See also: https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
     * */
    input: Partial<Message>
  ) {
    const updatedMessage = {...messages[index], ...input};

    const updatedMessages = messages.map((message, i) =>
      i === index ? updatedMessage : message
    );

    setMessages(updatedMessages);
  }

  function markMessageAsRead(index: number) {
    updateMessage(index, {read: true});
  }

  function markMessageAsUnread(index: number) {
    updateMessage(index, {read: false});
  }

  function deleteMessage(index: number) {
    setMessages([...messages.slice(0, index), ...messages.slice(index + 1)]);
  }

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
