import React, { useState } from 'react'
import Btn from './Btn'
import Input from './Input'

const Form = ({ handleSubmit, user, children, labelBtn }) => {
  const [nameUpdateQuery, setNameUpdateQuery] = useState('')
  const [ageUpdateQuery, setAgeUpdateQuery] = useState('')
  return (
    <form
      onSubmit={e =>
        handleSubmit({
          event: e,
          user,
          nameQuery: nameUpdateQuery,
          ageQuery: ageUpdateQuery,
        })
      }
    >
      <p>{children}</p>
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
      <Btn type='submit'>{labelBtn}</Btn>
    </form>
  )
}

export default Form
