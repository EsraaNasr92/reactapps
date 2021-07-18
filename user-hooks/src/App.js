import React, { useState } from 'react'
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './forms/EditUserForm'

const App = () => {

  const userData = [
    {id : 1, name: 'Esraa', username: 'esraanasr'},
    {id : 2, name: 'Ahmed', username: 'ahmedalaa'},
    {id : 3, name: 'Yahia', username: 'yeyaaa'},
  ]

  const [users, setUsers] = useState(userData)

  /* Add new user
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }*/


  // Add new user
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  // Removing user
  const deleteUser = (id) =>{
    setUsers(users.filter((user) => user.id !== id ))
  }

  // Update user
  const [ editing, setEditing ] = useState(false)
  const initialFormState = { id: null, name: '', username: '' }
  const [ currentUser, setCurrentUser ] = useState(initialFormState)

  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  const updateUser = ( id, updatedUser ) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }


  return (
    <div className="container">
        <h2>Hello to CRUD with Hooks</h2>
        <div className="flex-row">
          <div className="flex-large">
          {editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}

          </div>


          <div className="flex-large">
            <h3>View users</h3>
            <UserTable
                users={users}
                deleteUser={deleteUser}
                editRow={editRow}
            />
          </div>
        </div>
    </div>
  );
}

export default App;
