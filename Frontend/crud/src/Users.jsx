import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Users() {
    const [user,setuser] = useState([])

    useEffect(()=>{
      axios.get('http://localhost:3001')
      .then(res=>setuser(res.data))
      .catch(err=>console.log(err))
    },[])
  return (
    <div>
      <div>
        <Link to = "/create">ADD+</Link>
        <table>
            <thead>
                <tr>

                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>

                </tr>

            </thead>
            <tbody>
                {user.map((user) => {
                   // eslint-disable-next-line react/jsx-key
                   return <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                            <Link to="/update">Update</Link>
                            <button>Delete</button></td>
                    </tr>
                })
            }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
