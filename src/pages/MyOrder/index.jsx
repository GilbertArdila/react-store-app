import React,{useContext} from 'react';
import Layout from '../../components/Layout';

import { cartContext } from "../../context";
import OrderCard from "../../components/OrderCard";
import { totalPrice } from '../../utils';


const MyOrder = () => {
  const context = useContext(cartContext);

  console.log('orders in my Order',context.orders.slice(-1)[0])
  return (
    <Layout>
      MyOrder
      <div className='flex justify-between p-2'>
<span className='text-md font-mono m-6'>
        date: {context.orders.slice(-1)[0].date}</span>
      <span className='text-md font-mono m-6'>
        total: {context.orders.slice(-1)[0].Total}</span>
      <span className='text-md font-mono m-6'>
        total items: {context.orders.slice(-1)[0].totalProducts}</span>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 p-6 ">
        {context.orders.slice(-1)[0].products.map((item) => (
          <div key={item.id} className='flex justify-between items-center w-[200px] h-[300px] m-6'>
          <figure>
            <img className='w-[200px] h-[200px] object-contain rounded-lg mb-6 border border-blue-600' 
            src={item.url} 
            alt={item.name} />
            <div className='flex flex-col justify-center items-center'>
               <span className='text-sm font-light'>{item.name}</span>
            <span className='text-sm font-light m-6'>Quantity: {item.quantity}</span>
            <span className='text-sm font-light'>Total amount: {item.total}</span>
            </div>
           
          </figure>
          </div>   
          ))}
      </div>

      </Layout>
  )
}

export default MyOrder