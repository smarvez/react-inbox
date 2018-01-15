import React from 'react';
import Message from './Message';

const MessagesList = ({messages, toggleClass, updateMessage}) => {
  return (
    <div>
      {messages.map(message => (<Message key={message.id} message={message} toggleClass = {toggleClass} updateMessage = {updateMessage}/>))}
    </div>
  )
}

export default MessagesList
