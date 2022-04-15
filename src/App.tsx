import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { Orders } from "./pages/Orders";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectSneakersState } from "./redux/features/sneakers/selectors";
import {
  fetchSneakers,
  LoadingStatus,
} from "./redux/features/sneakers/sneakersSlice";

function App() {
  const dispatch = useDispatch();
  const { loadingStatus } = useSelector(selectSneakersState);

  useEffect(() => {
    if (loadingStatus === LoadingStatus.NEVER) {
      dispatch(fetchSneakers());
    }
  }, [dispatch, loadingStatus]);

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
