import React from 'react'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import Greeting from './components/Greeting'
import { FaCartArrowDown } from "react-icons/fa";
import { GiComputerFan } from "react-icons/gi";


const App = () => {

  const styles = { color: "white", backgroundColor: "crimson", padding: "2rem" };
  return (
    <section>
      <Weather />
      <UserStatus loggedIn={true} isAdmin={false} />
      <Greeting timeOfDay="morning" />

      <h1 style={styles} ><FaCartArrowDown /> <GiComputerFan /> 
        Inline Style</h1>
    </section>
  )
}

export default App
