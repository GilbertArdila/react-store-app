import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { cartContext } from "../../context";
import OrderCard from "../OrderCard";
import Price from "../Price";


const CheckOutSideMenu = () => {
  const context = useContext(cartContext);
  


  const handleRemoveItem = (id) => {
    const filteredCart = context.cart.filter((item) => item.id !== id);
    context.setCart(filteredCart);
    context.setCount(context.count - 1);
    

  };

 

  return (
    <aside
      className={`${
        context.isOpenCheckout ? "flex" : "hidden"
      } w-[230px] h-auto max-h-[calc(50vh)] lg:w-[360px] flex-col fixed right-0 border border-black rounded-lg bg-white z-20`}
    >
      <div className="flex  justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>

        <XMarkIcon
          className="h-6 w-6 text-black hover:cursor-pointer"
          onClick={() => context.handleOpenCheckout()}
        />
      </div>

      <div className="flex flex-col gap-2 p-6 overflow-y-scroll">
        {context.cart.map((item, index) => (
          <OrderCard key={index} id={item.id} name={item.name} url={item.url} price={item.price} handleRemoveItem={()=>handleRemoveItem(item.id)}/>
        ))}
      </div>
      <Price />
    </aside>
  );
};

export default CheckOutSideMenu;
