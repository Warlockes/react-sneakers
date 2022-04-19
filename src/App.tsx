import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { Orders } from "./pages/Orders";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSneakers } from "./redux/features/sneakers/sneakersSlice";
import { fetchOrders } from "./redux/features/orders/ordersSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSneakers());
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Layout>
  );
}

export default App;
