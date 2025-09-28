import React from 'react'

const ProductList = () => {

    const products = [
        { id: 1, name: "Phone", price: 20000 },
        { id: 2, name: "Laptop", price: 50000 },
        { id: 3, name: "PC", price: 50000 }
    ]
    
    return (
        <div>

            {
                products.map((p) => (
                    <div key={p.id}>
                        <h1>Name:{p.name} </h1>
                        <h1>Price:{p.price} </h1>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList
