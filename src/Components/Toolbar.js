import React from 'react';

const Toolbar = ({messages, selectAll, markAllRead, markUnread, applyLabel, removeLabel, deleteMessage, composeNew}) => {

  const checkbox = messages.filter(message => (message.selected === true)).length < messages.length ? "fa fa-square-o" : "fa fa-check-square"

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge" >{messages.filter(message => message.read === false).length}</span>
          unread messages
        </p>

        <a className="btn btn-danger" onClick={()=>{composeNew()}}>
          <i className="fa fa-plus"></i>
        </a>

        <button className="btn btn-default" onClick={()=>{selectAll()}}>
          <i className={`${checkbox}`}></i>
        </button>

        <button className="btn btn-default" onClick={()=>{markAllRead()}}>
          Mark As Read
        </button>

        <button className="btn btn-default" onClick={()=>{markUnread()}}>
          Mark As Unread
        </button>

        <select className="form-control label-select" onChange={(event)=>{applyLabel(event.target.value)}}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" onChange={(event)=>{removeLabel(event.target.value)}}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" onClick={()=>{deleteMessage()}}>
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  )
}

export default Toolbar
