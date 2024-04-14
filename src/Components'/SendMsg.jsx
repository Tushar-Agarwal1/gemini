import React from 'react'
import PropTypes from 'prop-types'

const SendMsg = ({msg,received})=> {
  return (
    <div className={received?"chat chat-start mx-40 mt-5":"chat chat-end mx-40 mt-5"}>
    <div className={received?"chat-bubble chat-bubble-warning ":"chat-bubble chat-bubble-success mx-6"} >{msg}</div>
  </div>
  )
}

SendMsg.propTypes = {}

export default SendMsg