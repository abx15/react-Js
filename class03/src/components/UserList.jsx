import React from 'react'

const UserList = () => {
    const users = [
        { id: 1, name: "Arun", age: 21 },
        { id: 2, name: "Sonam", age: 23 },
        { id: 3, name: "Sumit", age: 24 },
    ]
    return (
        <div>
            {
                users.map((user) => (
                    <div key={user.id}>

                        <h1>Name: {user.name}</h1>
                        <h1>Email: {user.email}</h1>
                        <h1>Age: {user.age}</h1>

                    </div>
                ))
            }
        </div>
    )
}

export default UserList
