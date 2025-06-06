import "./Home.css";
import React, { useState, useEffect } from "react";
import Cart from '../state/Cart';

const Home = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [cartItems,setCartItems]=useState([]);

  //   const handleProductChange = (e) => {
  //     console.log(e.target.value);
  //   };


  const handleAddToCart=(e)=>{
    e.preventDefault();  // form will not be automatically submitted
    if(productName && price){
        const newProduct={
            id:Date.now(),
            name:productName,
            price:parseFloat(price),
        };
        // console.log(newProduct);

        setCartItems([...cartItems,newProduct])
        setProductName('');
        setPrice('');
    }
  };



  return (
    <div className="container">
      <h1>Add Product</h1>
      <form className="form" onSubmit={handleAddToCart}>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <button className="btn-submit" type="submit">
          Add to Cart
        </button>
      </form>
      <Cart products={cartItems} setProducts={setCartItems}/>
    </div>
  );
};

export default Home;
