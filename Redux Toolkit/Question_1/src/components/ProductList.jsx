import React from 'react'
import {useDispatch} from "react-redux"
import { addItem } from '../redux/cartSlice'


const products = [
  { id: 1, name: 'Laptop', price: 600 },
  { id: 2, name: 'Phone', price: 300 },
  { id: 3, name: 'Headphones', price: 100 },
];


const ProductList = () => {
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Products</h2>
        {products.map(product =>(
            <div key={product.id}>
                <span>{product.name} -${product.price}</span>
                <button onClick={()=>dispatch(addItem(product))}                                                                            >
                    Add to cart
                </button>
            </div>
        ))}
    </div>
  )
}

export default ProductList


