import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([]);


  useEffect(() => {
    async function getData() {
      const responce = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await responce.json();
      if (data && data.length) setData(data);
    }

    getData()
  }, [])

  return (
    <div>
      <ul>
        {data.map(todo => (
          <section key={todo.id}>
            <li >{todo.title}</li>
            <li >{todo.body}</li>
          </section>
        ))}
      </ul>
    </div>
  )
}

export default App
