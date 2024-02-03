import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Cart } from "../components/Cart";
import { Equipment } from "../components/Equipment";
import { Delivery } from "../components/Delivery";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/equipment" element={<Equipment />} />
      <Route path="/delivery" element={<Delivery />} />

      {/* 
                <Route path="*" element={<Page404 />} /> */}
    </Routes>
  );
};
