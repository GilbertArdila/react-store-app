import {createContext,useState} from 'react';

export const cartContext = createContext();

export const CartProvider = ({children}) => {
    const [count,setCount] = useState(0);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [productToShow, setProductToShow] = useState({});

    const handleOpenDetail = () => {
        setIsOpenDetail(!isOpenDetail);
    }




    return (
        <cartContext.Provider value={{
            count,
            setCount,
            isOpenDetail,
            handleOpenDetail,
            productToShow, 
            setProductToShow
            }}>
            {children}
        </cartContext.Provider>
    )
}   
