import React,{useContext} from 'react'
import {NavLink} from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid'


import { cartContext } from '../../context';

const Navbar = () => {
  const context = useContext(cartContext);
  const activeStyle =  'underline underline-offset-2 text-gray-900';

  return (
    
    <nav className='flex flex-col sm:flex-row text-sm sm:text-lg font-light  justify-between items-center fixed z-20 w-full  py-5 px-8 top-0 bg-gray-300'>
      <ul className='flex justify-between  items-center gap-4'>
       
        <li>
          <NavLink 
          to='/'
          className={({isActive}) => isActive ? activeStyle : null}
          onClick={() => context.setSearchedItem()}>
            All</NavLink>
        </li>
        <li>
          <NavLink
           to='/consoles'
           className={({isActive}) => isActive ? activeStyle : null}
           onClick={() => context.setSearchedItem('consoles')}
           >Consoles</NavLink>
        </li>
        <li>
          <NavLink 
          to='/star-wars'
           className={({isActive}) => isActive ? activeStyle : null}
           onClick={() => context.setSearchedItem('star-wars')}>
            Star-wars</NavLink>
        </li>
        <li>
          <NavLink 
          to='/figures'
           className={({isActive}) => isActive ? activeStyle : null}
           onClick={() => context.setSearchedItem('figures')}
           >
            Figures</NavLink>
        </li>
        <li>
          <NavLink
           to='/others'
           className={({isActive}) => isActive ? activeStyle : null}
           onClick={() => context.setSearchedItem('other')}
           >
            Others</NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-4'>
        <li className='text-black/60'>
          {context.login?.email}
        </li>
        <li>
          {context.orders.length > 1? <NavLink to='/my-orders'
           className={({isActive}) => isActive ? activeStyle : null}>
            My Orders</NavLink>:null}
         
        </li>
        <li>
      {context.orders.length > 0 ?<NavLink to='/my-order'
           className={({isActive}) => isActive ? activeStyle : null}>
            My Order</NavLink>: null}
          
        </li>
        <li>
          <NavLink to='/my-account'
           className={({isActive}) => isActive ? activeStyle : null}>
            {context.login.length != 0 ? 'My Account' : null }</NavLink>
        </li>
        {context.login.length != 0 ? <li>
          <NavLink
           to='/'
           className={({isActive}) => isActive ? activeStyle : null}
           onClick={() => context.setLogOut()}
           >
            Log Out</NavLink>
        </li>: 
        <li >
          <NavLink to='/log-in'
           className={({isActive}) => isActive ? activeStyle : null}>
            Log In</NavLink>
        </li>}
        
        <li className='flex items-center'>
        <ShoppingBagIcon className="h-6 w-6 text-blue-500" />
        <div>{context.count}</div> 
        </li>
      </ul>
    </nav>
  )
}

export default Navbar