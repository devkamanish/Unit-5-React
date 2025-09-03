import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { removeItem } from '../redux/cartSlice'


const Cart = () => {
    const items = useSelector(state=>state.cart.items);
    const total = useSelector(state=>state.cart.total)
    const dispatch = useDispatch()

  return (
 <div>
    <h2>Shopping Cart</h2>
    {items.length ===0 ?(
        <p>No items in cart</p>

    ):(
        <ul>
            {items.map(item=>(
                <li key={item.id}>
                    {item.name} -${item.price}
                    <button onClick={()=>dispatch(removeItem)}>Remove </button>
                </li>
            ))}
        </ul>
    )}
    <h3>Total: ${total}</h3>
 </div>
)
}



export default Cart
