import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { Orders } from "./pages/Orders";

function App() {
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
