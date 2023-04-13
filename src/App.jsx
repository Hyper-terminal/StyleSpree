import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./pages/navbar/Navigation";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/product-details/ProductDetails";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":category" element={<Products />} />
          <Route path="details/:productID" element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
