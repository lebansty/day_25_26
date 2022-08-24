import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProductView() {
    const param = useParams();
    const [product,setProduct] = useState({})
    const [isloading,setLoading] = useState(false)

    useEffect(()=>{
        getProduct();
    },[])

    let getProduct = async () =>{
        setLoading(true)
try {
    
    let pro = await axios.get(`https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/products/${param.id}`)
setProduct(pro.data)
} catch (error) {
    console.log(error)
}
setLoading(false)
    }
  return (
   <>
    <div>Product View</div>
    {
        isloading ? (<div class="mx-auto" style={{width: "200px"}}>
        <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    </div>
    ) : 
    <ul><h4>{param.id}</h4>
<li>Name: {product.name}</li>
<li>Category: {product.category}</li>
<li>UnitsSold: {product.unitsold}</li>
<li>Price: {product.price}</li>
<li>EXP.date: {product.expdate}</li>
    </ul>
    }
   </>
  )
}

export default ProductView;