import React from 'react'

const ProductInfo = () => {

    const product = {
        name:"Laptop",
        price:30000,
        description:"This is a good laptop"

    }


  return (
    <div>
        <h2>Product Information</h2>
        <p>Name: {product.name}</p>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
    </div>
  )
}

export default ProductInfo
 