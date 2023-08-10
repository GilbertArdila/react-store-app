import { useContext } from "react";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import ProductDetail from "../../components/productDetail";
import CheckOutSideMenu from "../../components/CheckOutSideMenu";
import Tittle from "../../components/Tittle";
import { cartContext } from "../../context";
import SearchInput from "../../components/SearchInput";
import Loading from "../../components/Loading";

const Home = () => {
  const context = useContext(cartContext);

  return (
    <Layout>
      <Tittle tittle="Find Your Favorite Products" />
      <SearchInput/>
      <div className="grid gap-4  grid-cols-2 sm:grid-cols-4 w-full max-w-screen-lg px-2 mt-4">
        {context.filteredItems?.length < 1 ? (
          context.item &&
          context.item.map((item) => <Card key={item.id} data={item} />)
        ) : context.filteredItems ? (
          context.filteredItems?.map((item) => (
            <Card key={item.id} data={item} />
          ))
        ) : (
          <Loading />
        )}
      </div>
      <ProductDetail />
      <CheckOutSideMenu />
    </Layout>
  );
};

export default Home;
