import React from 'react';

const Body = ({message, bodyObj}) => {
  return(
    (message.id === bodyObj.id) ?
      (<div className="row message-body">
        <div className="col-xs-11 col-xs-offset-1">
          {bodyObj.body}
        </div>
      </div>) :
    (<div></div>)
  )
}

export default Body
