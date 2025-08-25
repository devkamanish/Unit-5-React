import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"

const Home = () => {
    const [products, setProducts] = useState([])
    const [filteredCategory, setFilteredCategory] = useState("all")
    const [sortOrder , setSortOrder] = useState("")

   useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((data)=> setProducts(data.products))
   },[])

    const fileredProducts = products.filter((ele)=>{
        if(filteredCategory === "all") return true
        return ele.category == filteredCategory
    })

    const sorted = [...fileredProducts].sort((a,b)=>{
      if(sortOrder === "low") return a.price - b.price;
      if(sortOrder === "high") return b.price - a.price;

    })
  return (
    <div style={{padding:"20px"}}>
        
        <h1>My Product Store</h1>
        <select value={filteredCategory} onChange={(e)=>setFilteredCategory(e.target.value)}>
            <option value="all">All</option>
            <option value="beauty">beauty</option>
            <option value="fragrances">fragrances</option>
            <option value="furniture">furniture</option>
            <option value="groceries">groceries</option>

        </select>
      

      <select value={sortOrder} onChange={(e)=>setSortOrder(e.target.value)}>
        <option value="">sort by price</option>
        <option value="low">low to high</option>
        <option value="high">high to low</option>
      </select>

        { 
            sorted.map((ele)=>(
                <div key = {ele.id} style={{border:"2px solid", width :"400px",padding:"12px", margin:"10px"}}>
                    <h5>{ele.title}</h5>
                    <p>{ele.category}</p>
                    <img src={ele.thumbnail} width={"100"} alt="" />

                    <p>{ele.price}</p>
                    <Link to = {`/product/${ele.id}`}>view details</Link>
                </div>
            ))
        }
    </div>
  )
}


export default Home

