import React,{useContext,  useEffect,  useState} from 'react';
import { XMarkIcon,CheckIcon } from '@heroicons/react/24/solid';

import { cartContext } from '../../context';


const OrderCard = props => {
const {id,name, url, price,handleRemoveItem} = props;
const context = useContext(cartContext);

const [quantity, setQuantity] = useState(1);
const [total, setTotal] = useState(price);
const [isAdded, setIsAdded] = useState(false);




const handleOnChange = (event) => {
    setQuantity(event.target.value);
    setTotal(price * event.target.value);
    
  
}

const handleAddToOrder = () => {
    const order = {
        id,
        name,
        url,
        total,
        quantity
    }
    context.setOrder([...context.order,order]);
 
}


  return (
    <div className='flex justify-between items-center'>
        <div className='flex  items-center gap-2'>
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-contain' src={url} alt={name} />
            </figure>
            <div className='flex flex-col justify-center'>
                <p className='text-sm font-light'> {name} </p>
                <div className='flex items-center gap-2'>
                <label className='text-sm font-thin' htmlFor="quantity"> Qty</label>
                <input 
                className='w-1/2 border border-black rounded-lg text-md' type="number"  
                name='quantity'
                value={quantity}
                onChange={(e) => handleOnChange(e) }/>
                 </div>   
                
            </div>
            
        </div>
        <div className='flex  items-center gap-2'>
            <p className='text-lg font-medium font-mono'>{total} </p>
            {isAdded ? <p className='text-sm font-thin text-green-500'>added</p> :  <XMarkIcon className='h-6 w-6 text-black hover:cursor-pointer hover:text-red-500'
            onClick={() =>{ 
                handleRemoveItem(id)
                
                }}></XMarkIcon>}
             
            <CheckIcon className={`${ isAdded ? 'bg-green-600' : 'h-6 w-6 text-black hover:cursor-pointer hover:text-green-500'} `}
            onClick={() =>{
                handleAddToOrder()
                setIsAdded(true);
                } }></CheckIcon>
        </div> 
             
    </div>
  )
}

export default OrderCard