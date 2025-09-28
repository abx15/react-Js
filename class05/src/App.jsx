import React from 'react'
import StyleCard from './components/StyleCard'
import ProfileCard from './components/ProfileCard'
import IconComponent from './components/IconComponent'



const Button =() =>{
  const handelClick = ()=> alert(Math.round(Math.random() * 10));

  return <button onClick={handelClick}>Click</button>
} 
const App = () => {
  return (
    <div>
      {/* <StyleCard />
      <ProfileCard />
      <IconComponent/> */}


      <Button />
      
    </div>
  )
}

export default App
