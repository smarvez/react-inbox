import React from 'react';
import Message from './Message';

const MessagesList = ({messages, toggleClass, updateMessage, getBody,  bodyObj, selectMessage, messageSelected}) => {
  return (
    <div>
      {messages.map(message => (

        <Message key={message.id}
          message={message}
          toggleClass = {toggleClass}
          updateMessage = {updateMessage}
          getBody = {getBody}
          bodyObj = {bodyObj}
          selectMessage = {selectMessage}
          messageSelected = {messageSelected}/>
        ))}
    </div>
  )
}

export default MessagesList
