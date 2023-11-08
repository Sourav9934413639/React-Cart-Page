import React, { useEffect } from 'react'
import '../styles/Cart.css'
import CartItem from './CartItem'

import { useDispatch, useSelector } from 'react-redux/es'
import NoItems from './NoItems'
const Cart = () => {
  const {cartItems,subTotal,tax,shipping,total}=useSelector(state=>state.cartReducer);
  const dispatch=useDispatch();
  const deleteHandler=(id)=>{
    dispatch({type:"deleteCartItem",payload:id})
  }
  const increment=(id)=>{
    dispatch({type:"addToCart",payload:{id}})
    dispatch({type:"calculatedPrice"})
  }
  const decrement=(id)=>{
    dispatch({type:"decrement",payload:id})
    dispatch({type:"calculatedPrice"})
    
  }
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    
    <div className='cart'>
      <main>
        {
          cartItems.length>0?
          (cartItems.map((product)=> 
          <CartItem image={product.imgSrc}
          key={product.id}
          title={product.name}
          price={product.price}
          id={product.id}
          qty={product.quantity}
          increment={increment}
          decrement={decrement}
          deleteHandler={deleteHandler}
          />)):(<NoItems/>)
        }
      </main>
      {
        (cartItems.length>0) &&
        (
          <aside>
        <div><h2>Subtotal:${subTotal}</h2></div>
        <div><h2>Tax:${tax}</h2></div>

        <div><h2>Shipping:${shipping}</h2></div>

        
        <div><h2>Total ({cartItems.length} items):${total}</h2></div>
        

      </aside>
        )
      }
    </div>

  )
}

export default Cart
