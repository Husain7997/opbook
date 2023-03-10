import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../service/Service';


const Products = () => {
   const [posts, setProducts]=useState([]);

   useEffect(()=>{
    fetch(`http://localhost:5000/posts`)
    .then(res=>res.json())
    .then (data=> setProducts(data))
   },[])
  
    return (
      <>
       <h2 className='text-center text-3xl font-bold '><u>All Products</u></h2>
       <div className='mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ' >
    
       {
        
        posts.map(service=><Service key={service._id}  service={service}></Service>)
       }
      
       
       </div>
      </>
    );
};

export default Products;