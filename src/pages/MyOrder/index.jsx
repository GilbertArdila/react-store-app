import React,{useContext} from 'react';
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link,useParams } from "react-router-dom";


import { cartContext } from "../../context";
import Layout from '../../components/Layout';
import Tittle from '../../components/Tittle';


const MyOrder = () => {
  const context = useContext(cartContext);
  const {id} = useParams();
  
  let order;
  if(id){
     order = context.orders.find((item) => item.id == id)
  }
  else{
     
     order = context.orders.slice(-1)[0];
    
  }
  
  
  return (
    <Layout>
      
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <Tittle tittle='My Order' />
      </div>
      <div className='flex justify-between p-2'>
<span className='text-md font-mono m-6'>
        date: {order?.date}</span>
      <span className='text-md font-mono m-6'>
        total: {order?.Total}</span>
      <span className='text-md font-mono m-6'>
        total items: {order?.totalProducts}</span>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 p-6 ">
        {order?.products.map((item) => (
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