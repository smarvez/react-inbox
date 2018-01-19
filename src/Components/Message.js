import React from 'react';
import Body from './Body';
import { Link } from 'react-router-dom'

const Message = ({message, toggleClass, updateMessage, getBody, bodyObj, messageSelected}) => {

  const readClass = message.read ? 'read' : 'unread';
  const starClass  = message.starred ? 'star fa fa-star-o' : 'star fa fa-star';
  const boxClass = message.selected ? 'selected' : '';
  const checkedClass = message.selected ? 'checked' : '';

  toggleMessage = () => {
    return messageSelected === false ? `/${bodyObj.id}` : '/'
  }

  return (
    <div className={`row message ${readClass} ${boxClass}`} onClick={(event)=>{
      event.stopPropagation()
      const body = {
        messageIds: [message.id],
        command: "read",
        read: !message.read
      }
      updateMessage(body, 'PATCH')
      toggleClass(message, 'read')
      getBody(body.messageIds[0])
    }}>
      <div className="col-xs-1">
        <div className="row">
          <div className={`col-xs-2 `} onClick={(event)=>{
            event.stopPropagation()
            toggleClass(message, 'selected')}}>
            <input type="checkbox"  checked= {`${checkedClass}`} />
          </div>
          <div className="col-xs-2" onClick= {(event)=>{
            event.stopPropagation()
            const body = {
              messageIds: [message.id],
              command: "star",
              star: !message.starred
            }
            updateMessage(body, 'PATCH')
            toggleClass(message, 'starred')}}>
            <i className={`${starClass}`}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {message.labels.map((e, i) => <span key={i} className="label label-warning">{e}</span>)}
        <span className="label label-warning"></span>
        <Link to={`${toggleMessage()}`}>
          {message.subject}
          <Body
            bodyObj = {bodyObj}
            message = {message} />
        </Link>
      </div>
    </div>
  )
}

export default Message
