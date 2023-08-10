import { createContext, useState, useEffect } from "react";

import { URL } from "../api/URL";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  // count of products in cart
  const [count, setCount] = useState(0);
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
  // orders array
  const [orders, setOrders] = useState([]);
  //products array
  const [item, setItem] = useState(null);
  //searched products array
  const [searchedItem, setSearchedItem] = useState(null);
  //filtered products array
  const [filteredItems, setFilteredItems] = useState(null);

  //login info
  const [login, setLogin] = useState([]);

  //setting email, user and password into setlogin
  const setLoginData = (email,user,password) => {
    setLogin({ email,  user, password });
  };

  // fetch products
  useEffect(() => {
    fetch(URL + "/geeks")
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, []);

  // open and close detail side menu
  const handleOpenDetail = () => {
    setIsOpenDetail(!isOpenDetail);
  };
  // open and close checkout side menu
  const handleOpenCheckout = () => {
    setIsOpenCheckout(!isOpenCheckout);
  };
  // filter products by name, description or category
  const filtered = (item, searchedItem) => {
    return item.filter(
      (item) =>
        item.name.toLowerCase().includes(searchedItem.toLowerCase()) ||
        item.description.toLowerCase().includes(searchedItem.toLowerCase()) ||
        item.category.name.toLowerCase().includes(searchedItem.toLowerCase())
    );
  };
  // filter products by name, description or category
  useEffect(() => {
    if (searchedItem) {
      setFilteredItems(filtered(item, searchedItem));
    } else {
      setFilteredItems(item);
    }
  }, [searchedItem, item]);

  
  console.log(orders.length)
  return (
    <cartContext.Provider
      value={{
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
        setOrder,
        orders,
        setOrders,
        item,
        setItem,
        searchedItem,
        setSearchedItem,
        filteredItems,
        setFilteredItems,
        setLoginData,
        login,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
