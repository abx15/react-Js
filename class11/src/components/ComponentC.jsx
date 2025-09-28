import React from 'react'
import { Data, Data1 } from '../App'
import { useContext } from 'react'

const ComponentC = () => {

    const userName=useContext(Data)
    const Age= useContext(Data1)
    return (
        <h1>My Name Is {userName} and My Age is {Age}</h1>
    )
}

export default ComponentC
