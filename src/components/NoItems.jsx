import React from 'react'
import missingItems from '../Images/MissingItems.png'
import { Link } from 'react-router-dom/dist'
const NoItems = () => {
  return (
    <div id='no_items'>
        <div><img src={missingItems} alt='graphics' /></div>
        <p>Missing Cart Items</p>
        <Link to='/'><button>Shop Now</button></Link>
    </div>
  )
}

export default NoItems
