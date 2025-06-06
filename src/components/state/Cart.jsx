import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = ({ products, setProducts }) => {
  const [totalNoOfProducts, setTotalNoOfProducts] = useState(products.length);

  /* Update total ONLY when products array changes */
  useEffect(() => {
    setTotalNoOfProducts(products.length);
  }, [products]);          // ← dependency array prevents loops

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };

  const handleDeleteAll = () => setProducts([]);

  /* ---------- render ---------- */
  if (products.length === 0) return <h1>Cart is Empty</h1>;

  return (
    <div className="cards">
      <h1>Items in Cart: {totalNoOfProducts}</h1>

      {products.map((p) => (
        <div className="card" key={p.id}>
          <p>{p.name}, Rs.{p.price}</p>
          <button className="btn-delete" onClick={() => handleDelete(p.id)}>
            Delete
          </button>
        </div>
      ))}

      <button onClick={handleDeleteAll}>Delete All</button>
    </div>
  );
};

export default Cart;



// const Cart = () => {
//    const [totalNoOfProducts,setTotalNoOfProducts]=useState(data.length)
//    const [products, setProducts]=useState(data)

//    const  handleDeleteAll=()=> {
//     setProducts([]);
//     setTotalNoOfProducts(0);

//    }

//    const handleDelete=(id)=>{
//     const updateProducts=products.filter((x)=>x.id!=id);
//     setProducts(updateProducts);
//     setTotalNoOfProducts(updateProducts.length);

//    }

//    const handleReset=()=>{
//     setProducts(data);
//     setTotalNoOfProducts(data.length);

//    }




//   return (
//     <div className='cards'>
//       <h1>Item in Cart: {totalNoOfProducts}</h1>
//       {products.map((product)=>{
//         return <div className='card' key={product.id}>
//           <p>{product.name},Rs.{product.price} </p>
//           <button className='btn-delete' onClick={()=>{handleDelete(product.id)}} > Delete</button>
//         </div>
//       })}
//       <button onClick={handleDeleteAll}>Delete All</button>
//       <button onClick={handleReset}>Reset</button>

//     </div>
//   )
// }

// export default Cart