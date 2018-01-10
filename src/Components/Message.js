import React from 'react'

const Message = ({message, toggleClass}) => {

  const readClass = message.read ? 'read' : 'unread';
  const starClass  = message.starred ? 'star fa fa-star-o' : 'star fa fa-star';
  const boxClass = message.selected ? true : false;

  return (
    <div className={`row message ${readClass}`} onClick= {(event)=>{toggleClass(event, message, 'read')}}>
      <div className="col-xs-1">
        <div className="row">
          <div className={`col-xs-2 ${boxClass}`} onClick={(event)=>{toggleClass(event, message, true)}}>
            <input type="checkbox" />
          </div>
          <div className="col-xs-2">
            <i className={`${starClass}`} onClick= {(event)=>(toggleClass(event, message, 'starred'))}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        <a href="#">
          {message.subject}
        </a>
      </div>
    </div>
  )
}

export default Message
