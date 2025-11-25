import { MainPage } from "./components/pages/main-page/main-page";
import { BrowserRouter, Route, Routes } from "react-router";
import { OrderPage } from "./components/pages/order-page/order-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
