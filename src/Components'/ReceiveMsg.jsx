import React from 'react'

const ReceiveMsg = 
({msg}) => {
  return (
    <div className="chat chat-start">
  <div className="chat-bubble chat-bubble-secondary mx-6">{msg}</div>
</div>
  )
}

export default ReceiveMsg