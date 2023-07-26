import React,{useContext} from 'react'
import {NavLink} from 'react-router-dom';

import { cartContext } from '../../cotext';

const Navbar = () => {
  const context = useContext(cartContext);
  const activeStyle =  'underline underline-offset-2 text-gray-900';

  return (
    
    <nav className='flex flex-col sm:flex-row text-sm sm:text-lg font-light  justify-between items-center fixed z-10 w-full  py-5 px-8 top-0'>
      <ul className='flex justify-between  items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to='/'
            >Home</NavLink>
        </li>
        <li>
          <NavLink 
          to='/'
          className={({isActive}) => isActive ? activeStyle : null}>
            All</NavLink>
        </li>
        <li>
          <NavLink to='/consoles'
           className={({isActive}) => isActive ? activeStyle : null}
           >Consoles</NavLink>
        </li>
        <li>
          <NavLink to='/star-wars'
           className={({isActive}) => isActive ? activeStyle : null}>
            Star-wars</NavLink>
        </li>
        <li>
          <NavLink to='/figures'
           className={({isActive}) => isActive ? activeStyle : null}>
            Figures</NavLink>
        </li>
        <li>
          <NavLink to='/others'
           className={({isActive}) => isActive ? activeStyle : null}>
            Others</NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          customer@gmail.com
        </li>
        <li>
          <NavLink to='/my-orders'
           className={({isActive}) => isActive ? activeStyle : null}>
            My Orders</NavLink>
        </li>
        <li>
          <NavLink to='/my-order'
           className={({isActive}) => isActive ? activeStyle : null}>
            My Order</NavLink>
        </li>
        <li>
          <NavLink to='/my-account'
           className={({isActive}) => isActive ? activeStyle : null}>
            My Account</NavLink>
        </li>
        <li>
          <NavLink to='/sign-in'
           className={({isActive}) => isActive ? activeStyle : null}>
            Sign In</NavLink>
        </li>
        <li>
          🛒 {context.count}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar