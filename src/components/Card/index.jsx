import React, { useContext} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { PlusCircleIcon, CheckIcon } from "@heroicons/react/24/solid";

import { cartContext } from "../../context";

const Card = (data) => {
  const context = useContext(cartContext);


  const handleOnClick = () => {
    context.setProductToShow(data.data);
    context.handleOpenDetail();
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    context.setCart([...context.cart, data.data]);
    context.setCount(context.count + 1);
    context.handleOpenCheckout();
    
  };

  const renderIcon= (id) => {
    const isExist = context.cart.find((item) => item.id === id);
    if(isExist) {
      return(
      <button className="absolute top-0 right-0 flex justify-centetr items-center bg-white  w-6 h-6 rounded-full m-2 p-1 hover:bg-green-800"> 
      <CheckIcon className="h-6 w-6 text-green-400 hover:text-black" />
      </button>)
    } else {
      return(
      <button className="absolute top-0 right-0 flex justify-centetr items-center bg-white  w-6 h-6 rounded-full m-2 p-1 hover:bg-blue-500 ">
      <PlusCircleIcon
      className="h-6 w-6 text-blue-500 hover:text-white "
      onClick={(event) => handleAddToCart(event)}
    />
      </button>)
  } 
  }



  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => handleOnClick()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 z-10">
          {data.data.category.name}
        </span>
        <LazyLoadImage
          className="w-full h-full object-fill rounded-lg"
          src={data.data.url}
          alt={data.data.name}
          effect="blur"
          height={"100%"}
          width={"100%"}
        />
        
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.name}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
