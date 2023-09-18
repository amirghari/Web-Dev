import { useEffect, useState } from 'react'
import axios from 'axios'

interface User {
  id: number
  name: string
}

const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onDelete = (user: User) => {
    const originalUsers = [...users]
    setUsers(users.filter((u) => u.id !== user.id))
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .catch((err) => {
        setError(err.message)
        setUsers(originalUsers)
      })
  }

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)

    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])
  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <div className="spinner-border text-primary"></div>}
      <ul className="list-form list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            {
              <button
                type="button"
                onClick={() => onDelete(user)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            }
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
