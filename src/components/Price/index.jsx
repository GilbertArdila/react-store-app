import React,{ useContext,useState,useEffect} from 'react'

import { cartContext } from "../../context";
import { totalPrice } from "../../utils";

const Price = () => {
    const context = useContext(cartContext);
    const [cartTotal, setCartTotal] = useState(0);
 

  useEffect(() => {
    setCartTotal(parseFloat(totalPrice(context.order)).toFixed(2));
    
  }, [context.order]);

  return (
    <div className='flex justify-between mt-3 px-10'>
            <span>Total</span>
            <span>{cartTotal}</span>
            </div>
  )
}

export default Price