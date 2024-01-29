import { BrowserRouter } from "react-router-dom";
import { MyLayout } from "./Layout/MyLayout";

const App = () => {
  return (
    <BrowserRouter>
      <MyLayout />
    </BrowserRouter>
  );
};
export default App;
