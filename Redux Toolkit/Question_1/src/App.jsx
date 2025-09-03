import { useState } from 'react'

import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1>Shopping cart app</h1>
    <ProductList/>
    <Cart/>
   </>
  )
}

export default App
