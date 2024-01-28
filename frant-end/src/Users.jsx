import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Users = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http"//localhost:3030')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }, [])
  return (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>First Name</th>
                    <th scope='col'>Last Name</th>
                    <th scope='col'>Mobile Number</th>
                    <th scope='col'>NIC</th>
                    <th scope='col'>Added Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.mobile}</td>
                            <td>{user.nic}</td>
                            <td>{user.create_at}</td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default Users