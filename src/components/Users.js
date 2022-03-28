import React from 'react'
import { useSelector } from 'react-redux'
import User from "./User"

const Users = () => {

    const userList = useSelector((state) => state.users.value)
    return (
        <div className='row row-cols-1 row-cols-md-4 g-4 mt-5'>
            {userList.map((user => <User key={user.id} user={user} />))}
        </div>
    )
}

export default Users