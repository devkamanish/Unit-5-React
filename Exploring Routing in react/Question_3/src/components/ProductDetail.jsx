
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from "react-router-dom"

const ProductDetail = () => {
   const [product , setProduct] = useState("")

    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then((res)=>res.json())
        .then((data)=> setProduct(data))

    })

  return (
    <div style={{padding:"20px" , width : "80vw" , height :"60vh"}} >
        <h4>{product.title}</h4>
        <img src= {product.thumbnail} alt="" width={"100"} />
        <p>{product.price}</p>
        <p>{product.category}</p>
        <p>{product.brand}</p>
        <p>{product.description}</p>

    </div>
  )
}

export default ProductDetail



