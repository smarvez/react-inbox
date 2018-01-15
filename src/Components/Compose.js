import React from 'react';
const Compose = ({composeMessage, clicked, createItem, handleSubject, handleBody, subject, bodyContent}) => {
  return(
    clicked ?
    (<div>
      <form className="form-horizontal well">
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <h4>Compose Message</h4>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject" value={this.value} onChange={(event)=>{handleSubject(event)}}></input>
          </div>
        </div>
        <div className="form-group" onSubmit={this.createItem}>
          <label htmlFor="body" className="col-sm-2 control-label">Body</label>
          <div className="col-sm-8">
            <textarea name="body" id="body" className="form-control" value={this.value} onChange={(event)=>{handleBody(event)}}></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2" onClick={()=>{
            const body = {
              subject: subject,
              body: bodyContent
            }
            composeMessage(body, 'POST')}}>
            <input type="submit" value="Send" className="btn btn-primary"></input>
          </div>
        </div>
      </form>
    </div>
  ):
  (<div></div>)
  )
}
export default Compose
