import React from 'react'

const Toolbar = (props) => {
  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge" >{props.messages.filter(message => message.read === false).length}</span>
          unread messages
        </p>

        <button className="btn btn-default" onClick={()=>{props.selectAll()}}>
          <i className="fa fa-square-o"></i>
        </button>

        <button className="btn btn-default" onClick={()=>{props.markAllRead()}}>
          Mark As Read
        </button>

        <button className="btn btn-default" onClick={()=>{props.markUnread()}}>
          Mark As Unread
        </button>

        <select className="form-control label-select" onChange={(event)=>{props.applyLabel(event.target.value)}}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" onChange={(event)=>{props.removeLabel(event.target.value)}}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" onClick={()=>{props.deleteMessage()}}>
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  )
}

export default Toolbar
