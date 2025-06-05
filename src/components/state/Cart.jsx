import React, {useState} from 'react'
import './Cart.css';
import {data} from '../../data/dataset.js'

const Cart = () => {
   const [totalNoOfProducts,setTotalNoOfProducts]=useState(data.length)
   const [products, setProducts]=useState(data)

   const  handleDeleteAll=()=> {
    setProducts([]);
    setTotalNoOfProducts(0);

   }

   const handleDelete=(id)=>{
    const updateProducts=products.filter((x)=>x.id!=id);
    setProducts(updateProducts);
    setTotalNoOfProducts(updateProducts.length);

   }

   const handleReset=()=>{
    setProducts(data);
    setTotalNoOfProducts(data.length);

   }




  return (
    <div className='cards'>
      <h1>Item in Cart: {totalNoOfProducts}</h1>
      {products.map((product)=>{
        return <div className='card' key={product.id}>
          <p>{product.name},Rs.{product.price} </p>
          <button className='btn-delete' onClick={()=>{handleDelete(product.id)}} > Delete</button>
        </div>
      })}
      <button onClick={handleDeleteAll}>Delete All</button>
      <button onClick={handleReset}>Reset</button>

    </div>
  )
}

export default Cart