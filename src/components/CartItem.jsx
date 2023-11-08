import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
const CartItem = ({image, title,price,qty,decrement,increment,deleteHandler,id}) => {
  return (
    <div className='cartItem'>
        <div>
            <img src={image} alt='item' />
            <article>
                <h3>{title}</h3>
                <p>$ {price}</p>
            </article>
        </div>
        <div>
            <button onClick={()=>decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=>increment(id)}>+</button>
            
        </div>
        <AiFillDelete id='del' onClick={()=>deleteHandler(id)} />
    </div>
  )
}

export default CartItem
