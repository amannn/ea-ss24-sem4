import {useState} from 'react';
import {Message} from './MessageBoard';

const initialState = JSON.parse(
  localStorage.getItem('messages') || '[]'
) as Array<Message>;

export default function useMessageBoardModel() {
  const [messages, _setMessages] = useState<Array<Message>>(initialState);
  const unreadMessages = messages.filter((message) => !message.read);

  function setMessages(messages: Array<Message>) {
    _setMessages(messages);
    localStorage.setItem('messages', JSON.stringify(messages));
  }

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

  // We're using the shorthand for creating an object here, where if the key and
  // the value have the same name, we can omit the value. This is equivalent to
  // `{messages: messages, ...}`.
  return {
    messages,
    unreadMessages,
    createMessage,
    updateMessage,
    markMessageAsRead,
    markMessageAsUnread,
    deleteMessage
  };
}
