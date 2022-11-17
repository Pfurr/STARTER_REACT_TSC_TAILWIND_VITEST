import { Children, ReactElement, useEffect, useState } from 'react'

export const API_URL = 'https://jsonplaceholder.typicode.com/users' as string

// types
import { AppState } from '../types.d'

function Demo(): ReactElement {
  const [users, setUsers] = useState<AppState['users_state']>([])
  const [error, setError] = useState<AppState['error_state']>(null)

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch(() => setError('Error fetching users'))
  }, [])

  return (
    <div className="w-auto h-auto mx-auto border-t-4 rounded border-black shadow text-center p-4 m-10 bg-red-400">
      {/* title */}
      <h1 className="p-4 text-green-200 font-bold">
        Users - Demo component - check if Msw is working?
      </h1>

      {/* manage error */}
      {error && <span className="text-red-500">{error}</span>}

      {/* render fake data */}
      <ul>
        {users.map((user) => (
          <li key={user.id} className="font-bold mb-8 text-green-900">
            <span className="text-black">Username: </span> {user.username}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Demo
