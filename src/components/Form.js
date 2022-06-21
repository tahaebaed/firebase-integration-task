import React, { useState } from 'react'
import Btn from './Btn'
import Input from './Input'

const Form = ({ handleSubmit }) => {
  const [nameUpdateQuery, setNameUpdateQuery] = useState('')
  const [ageUpdateQuery, setAgeUpdateQuery] = useState('')
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        handleSubmit(nameUpdateQuery, ageUpdateQuery)
      }}
    >
      <p>update form</p>
      <Input
        type='text'
        value={nameUpdateQuery}
        handleChange={e => setNameUpdateQuery(e.target.value)}
        placeHolder='please enter name'
      />
      <Input
        type='text'
        value={ageUpdateQuery}
        handleChange={e => setAgeUpdateQuery(e.target.value)}
        placeHolder='please enter age'
      />
      <Btn type='submit'>update User</Btn>
    </form>
  )
}

export default Form
