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
    <div>Users</div>
  )
}

export default Users