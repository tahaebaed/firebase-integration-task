import { db } from './firebase/firebase'
import './App.css'
import React, { useEffect, useState } from 'react'
import Btn from './components/Btn'
import Form from './components/Form'

const App = () => {
  const [userList, setUserList] = useState([])

  const getUsers = async () => {
    await db.collection('Users').onSnapshot(snapshot => {
      const users = snapshot.docs.map(user => ({
        id: user.id,
        info: user.data(),
      }))
      setUserList([...users])
    })
  }

  const handleAddUser = async ({ event, nameQuery, ageQuery }) => {
    event.preventDefault()
    await db.collection('Users').doc().set({
      Name: nameQuery,
      Age: ageQuery,
    })
  }

  const handleDelete = async id => {
    await db.collection('Users').doc(id).delete()
  }

  const handleUpdate = async ({ event, user, nameQuery, ageQuery }) => {
    event.preventDefault()
    await db
      .collection('Users')
      .doc(user.id)
      .update({
        Name: nameQuery !== '' ? nameQuery : user.info.Name,
        Age: ageQuery !== '' ? ageQuery : user.info.Age,
      })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='App'>
      <Form handleSubmit={handleAddUser} labelBtn='add'>
        Add New User
      </Form>

      <h2>List of Users</h2>

      {userList.map(user => (
        <React.Fragment key={user.id}>
          <p>
            {user.info.Name} {user.info.Age}
          </p>

          <Form handleSubmit={handleUpdate} user={user} labelBtn='update'>
            Update User
          </Form>

          <Btn handleClick={() => handleDelete(user.id)}>Delete</Btn>
        </React.Fragment>
      ))}
    </div>
  )
}

export default App
