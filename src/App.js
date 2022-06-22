import { db } from './firebase/firebase'
import './App.css'
import React, { useEffect, useState } from 'react'
import Btn from './components/Btn'
import Input from './components/Input'
import Form from './components/Form'

const App = () => {
  const [userList, setUserList] = useState([])
  const [nameQuery, setNameQuery] = useState('')
  const [ageQuery, setAgeQuery] = useState('')

  const getUsers = async () => {
    await db.collection('Users').onSnapshot(snapshot => {
      const users = snapshot.docs.map(user => ({
        id: user.id,
        info: user.data(),
      }))
      setUserList([...users])
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await db.collection('Users').doc().set({
      Name: nameQuery,
      Age: ageQuery,
    })
  }

  const handleDelete = async id => {
    await db.collection('Users').doc(id).delete()
  }

  const handleUpdate = async (user, queryName, queryAge) => {
    await db
      .collection('Users')
      .doc(user.id)
      .update({
        Name: queryName !== '' ? queryName : user.info.Name,
        Age: queryAge !== '' ? queryAge : user.info.Age,
      })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <h2>Add New User</h2>
        <Input
          type='text'
          value={nameQuery}
          handleChange={e => setNameQuery(e.target.value)}
          placeHolder='please enter name'
        />
        <Input
          type='text'
          value={ageQuery}
          handleChange={e => setAgeQuery(e.target.value)}
          placeHolder='please enter age'
        />
        <Btn type='submit'>Add User</Btn>
      </form>

      <h2>List of Users</h2>

      {userList.map(user => (
        <React.Fragment key={user.id}>
          <p>
            {user.info.Name} {user.info.Age}
          </p>

          <Form
            handleSubmit={(queryName, queryAge) =>
              handleUpdate(user, queryName, queryAge)
            }
          />

          <Btn handleClick={() => handleDelete(user.id)}>Delete</Btn>
        </React.Fragment>
      ))}
    </div>
  )
}

export default App
