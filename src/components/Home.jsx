import React from 'react'
import ProductCard from './ProductCard'
import productData from '../data/data.json'
import '../styles/Home.css'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux/es'


const Home = () => {
    const dispatch=useDispatch();
    const clickHandler=(options)=>{
        console.log(options);
        dispatch({type:"addToCart",payload:options})
        dispatch({type:"calculatedPrice"})
        toast.success("Added To Cart");
    }
  return (
    <div className='home'>
        {
            productData.map((i)=>{
             return   <ProductCard 
                key={i.id}
                imgSrc={i.image}
                name={i.title}
                desc={i.description}
                price={i.price}
                id={i.id}
                clickHandler={clickHandler}
             />
            })
        }
    </div>
  )
}

export default Home
