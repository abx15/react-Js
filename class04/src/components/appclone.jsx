import React from 'react'




const Cart = () => {

  const items = ["Wireless Earburd", "Power Bank", "New Mobile", "SSD"];

  return (
    <div>
      cart
      {items.length > 0 && <h2>You Have {items.length} items In your Cart</h2>}

      <ul>
        <h4>Products</h4>

        {
          items.map((item) => (
            <li key={Math.random()}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}







const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>



const Password = ({ isValid }) => {
  // if (isValid) {
  //   return <ValidPassword />
  // } else {
  //   return <InvalidPassword />
  // }

  return isValid ? <ValidPassword /> : <InvalidPassword />;
}

const App = () => {
  return (
    <section>
      <Password isValid={true} />
      <Cart />
    </section>
  )
}

export default App
