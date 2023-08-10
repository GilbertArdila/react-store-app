import React,{useContext} from 'react';
import Layout from '../../components/Layout';
import { Link } from "react-router-dom";

import OrdersCard from '../../components/OrdersCard';
import { cartContext } from '../../context';
import Tittle from '../../components/Tittle';

const MyOrders = () => {
  const context = useContext(cartContext);
 
  return (
    <Layout>
      <Tittle tittle='My Orders' />
      
      {context.orders.map((item,index) => {
        return (
          <Link 
          to={`/my-orders/${item.id}`}
          key={index}>
             <OrdersCard
            key={item.id}
            totalPrice={item.Total}
            totalProducts={item.totalProducts}
            date={item.date}
          />
          </Link>
         
        );
      }
      )}
    </Layout>
  )
}

export default MyOrders