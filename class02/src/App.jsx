import React from 'react'
import Greet from './components/Greet'
import ProductInfo from './components/ProductInfo'

const App = () => {

  const userInfo = [
    {
      name: "Arun Kumar",
      email: "arun@example.com",
      location: "Prayagraj, India"
    },
    {
      name: "Sneha Sharma",
      email: "sneha@example.com",
      location: "Lucknow, India"
    },
    {
      name: "Rahul Verma",
      email: "rahul@example.com",
      location: "Delhi, India"
    }


  ]
  return (

    <main>
      {
        userInfo.map(({ name, email, location }) => (
          <ul key={Math.random()}>
            <li>{name}</li>
            <li>{email}</li>
            <li>{location}</li>
          </ul>
        ))
      }
    </main>
  )
}

export default App
