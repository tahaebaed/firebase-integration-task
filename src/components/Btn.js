import React from 'react'

const Btn = ({ children, type, handleClick, id }) => (
  <button type={type} id={id} onClick={handleClick}>
    {children}
  </button>
)

export default Btn
