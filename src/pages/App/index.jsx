import { useRoutes, BrowserRouter } from "react-router-dom";

import { CartProvider } from "../../context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../components/Navbar";
import "./index.css";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />
     
      <AppRoutes />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
