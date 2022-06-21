import React from 'react'

const Input = ({ id, name, value, handleChange, placeHolder, type }) => (
  <input
    name={name}
    type={type}
    value={value}
    id={id}
    onChange={handleChange}
    placeholder={placeHolder}
  />
)

export default Input
