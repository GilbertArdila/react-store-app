import React,{useContext} from "react";
import { XMarkIcon } from '@heroicons/react/24/solid';

import { cartContext } from "../../cotext";



import "./styles.css";

const ProductDetail = () => {
  const context = useContext(cartContext);
  console.log(context.productToShow);
  return (
    <aside className={ `${context.isOpenDetail ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white z-20`}>
      <div className="flex  justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
       
          <XMarkIcon 
        className="h-6 w-6 text-black hover:cursor-pointer"
        onClick={ () => context.handleOpenDetail()} />
        
        
      </div>
      <figure className="px-6">
        <img className="w-full h-full rounded-lg" src={context.productToShow.url} alt={context.productToShow.name} />
      </figure>
      <div className="flex flex-col justify-between items-center p-6">
        <h2 className="font-medium text-xl mb-3">{context.productToShow.name}</h2>
        <p className="font-light text-sm mb-3">{context.productToShow.category.name}</p>
        <p className="font-light text-sm mb-3">{context.productToShow.description}</p>
        <p className="font-medium text-lg">${context.productToShow.price}</p>
      </div>
    </aside>
  );
};

export default ProductDetail;
