import {createContext,useState} from 'react';

export const cartContext = createContext();

export const CartProvider = ({children}) => {
    // count of products in cart
    const [count,setCount] = useState(0);
    // open and close detail side menu
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    // open and close checkout side menu
    const [isOpenCheckout, setIsOpenCheckout] = useState(false);
    // product to show in detail side menu
    const [productToShow, setProductToShow] = useState({});
    // cart product's array
    const [cart, setCart] = useState([]);
    // products added to order
    const [order, setOrder] = useState([]);
    
  
   
    // open and close detail side menu
    const handleOpenDetail = () => {
        setIsOpenDetail(!isOpenDetail);
    }
     // open and close checkout side menu
    const handleOpenCheckout = () => {
        setIsOpenCheckout(!isOpenCheckout);
    }
    
     
    return (
        <cartContext.Provider value={{
            count,
            setCount,
            isOpenDetail,
            handleOpenDetail,
            productToShow, 
            setProductToShow, 
            cart,
            setCart,
            isOpenCheckout,
            handleOpenCheckout,
            order,
            setOrder
            
           
            }}>
            {children}
        </cartContext.Provider>
    )
}   
