import React, { useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";



import { cartContext } from "../../context";

const OrdersCard = () => {

  const context = useContext(cartContext);
  console.log(context.orders)

  return (
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4   my-6 w-full h-full">

      {context.orders.map((order) => (
        <div key={order.id} className="flex flex-col  justify-center items-center w-full h-full  border border-black rounded-lg  p-2 py-6">
          <h3 className="text-xl">Order Date: {order.date}</h3>
            <h3 className="text-xl">Order Total: {order.Total}</h3>
            <h3 className="text-xl">Total Products in this order: {order.totalProducts}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-3/4 h-full items-center my-4 p-2">
            
            {order.products.map((product) => (
              <div className="flex flex-col justify-center items-center w-1/2 h-auto md:w-full md:h-full">
                
                <figure className="w-full h-full">
                  <LazyLoadImage
                  className="w-3/4 h-3/4 md:w-full md:h-full object-contain rounded-lg mb-6  "
                    src={product.url}
                    alt={product.name}
                    effect="blur"
                    height={"70%"}
                    width={"70%"}
                  />
            
                <h3 className="text-xl">Name: {product.name}</h3>
                <h3 className="text-xl">Price: {product.total}</h3>
                <h3 className="text-xl">Quantity: {product.quantity}</h3>
                </figure>
              </div>
                ))}
          </div>
        </div>
      ))}

    </div>
  );
            };
export default OrdersCard;
