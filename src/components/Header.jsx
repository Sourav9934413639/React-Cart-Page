import React from 'react'
import { Link } from 'react-router-dom/dist';
import bag from '../Images/ShoppingBag.png'
import logo from '../Images/logo.png'
import '../styles/Header.css'
import { useSelector } from 'react-redux/es';

const Header = () => {

 const currState=useSelector(state=>state.cartReducer);
  return (
    <nav>
        <div id='logo'><Link to={'/'}><img src={logo} alt='logo' /></Link></div>
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'} id='cartLink'>
                <div id='bag'><img src={bag} alt='bag'/></div>
                {
                  (currState.cartItems.length>0) && (<p>({currState.cartItems.length})</p>)
                }
            </Link>

        </div>
    </nav>
  )
}

export default Header
