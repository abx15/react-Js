import React from 'react'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import Profile from './components/Profile'
import ShopingList from './components/ShopingList'

const App = () => {
  return (
    <div>
      <Counter />
      <TodoList />
      <Profile />
      <ShopingList />
    </div>
  )
}

export default App
