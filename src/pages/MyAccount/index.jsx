import React,{useContext} from 'react';

import Layout from '../../components/Layout';
import { cartContext } from '../../context';
import Tittle from '../../components/Tittle';

const MyAccount = () => {
  const context = useContext(cartContext);
  const {email,user,password} = context.login;
  console.log(context.orders)
  
  return (
    <Layout>
      <div className='flex flex-col w-full h-full  items-center p-10'>
 <Tittle tittle={'My Account'}/>
      <div className='flex flex-col items-center mt-10 p-10 '>
        
        <div className='flex flex-col items-start justify-center gap-3'>
          <span  className='text-black/60 my-2 '>Email: {email}</span>
          <span className='text-black/60 my-2 w-80'>User: {user}</span>
          <span className='text-black/60 my-2 w-80'>You have {context.orders.length} Order(s)</span>
        </div>
      </div>

      </div>
     

    </Layout>
  )
}

export default MyAccount