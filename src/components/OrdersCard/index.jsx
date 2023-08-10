import React from "react";
import { ShoppingCartIcon,CalendarDaysIcon,CurrencyDollarIcon } from "@heroicons/react/24/solid";





const OrdersCard = (props) => {

  const{totalPrice,totalProducts,date} = props;

  

  return (
  
    <div className="flex flex-col justify-between items-start m-3 p-6 border border-black rounded-lg">

      <div className="flex justify-around items-center">
      <CalendarDaysIcon className="h-6 w-6 text-black "/ >
         <p>date of the order: {date}</p>
      </div>

      <div className="flex justify-around items-center">
      <CurrencyDollarIcon className="h-6 w-6 text-black "/ >
        <p>Total amount: ${totalPrice}</p>
      </div>
      
      
      <div className="flex justify-between items-center">
         <ShoppingCartIcon className="h-6 w-6 text-black "/ >
      <p>Total products in this order: {totalProducts}</p>
          </div>
      </div>
     
     
  );
            };
export default OrdersCard;
