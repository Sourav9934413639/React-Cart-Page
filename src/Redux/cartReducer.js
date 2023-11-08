import { createReducer } from "@reduxjs/toolkit/dist";
const initialState={
    cartItems:[],
    subTotal:0,
    shipping:0,
    tax:0,
    total:0
};
export const cartReducer=createReducer(initialState,{
  addToCart:(state,action)=>{
    const item=action.payload;
    const isItemExist=state.cartItems.find((i)=>i.id===item.id);
    if(isItemExist){
        state.cartItems.forEach((i)=>{
            if(i.id===item.id){
                i.quantity+=1;
            }
        })
    }
    else{
        state.cartItems.push(item);
    }
  },

  decrement:(state,action)=>{
    const item=state.cartItems.find((i)=>i.id===action.payload);
    if(item.quantity>1){
       state.cartItems.forEach((i)=>{
        if(i.id===item.id) i.quantity-=1;
       })
    }
  },
  deleteCartItem:(state,action)=>{
    state.cartItems=state.cartItems.filter((i)=>i.id!==action.payload);
  },
  calculatedPrice:(state)=>{
    let sum=0;
    state.cartItems.forEach((i)=>{
      sum+=i.price*i.quantity;
      return sum;
    });
    state.subTotal=sum;
    state.shipping=state.subTotal>1000?0:200;
    state.tax=+(state.subTotal*0.18).toFixed(2);
    state.total=state.subTotal+state.tax+state.shipping;
  }
})