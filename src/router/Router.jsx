import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Example } from "../components/Example";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ex" element={<Example />} />
      {/* 
                <Route path="*" element={<Page404 />} /> */}
    </Routes>
  );
};
