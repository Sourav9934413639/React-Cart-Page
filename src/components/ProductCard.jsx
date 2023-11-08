import React from 'react'

const ProductCard = ({imgSrc,id,name,price,desc,clickHandler}) => {
  return (
    <div className='productCard'>
      <div><img src={imgSrc} alt={name} /></div>
      <p>{name}</p>  
      <p>{desc}</p>
      <h3>₹ {price}</h3>
      <button onClick={()=> clickHandler({name,price,id,desc,quantity:1,imgSrc})}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
