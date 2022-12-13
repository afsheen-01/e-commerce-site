import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { OrderSummary } from "./pages/OrderSummary";
import { Products } from "./pages/Products";
import { Home } from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/summary" element={<OrderSummary />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
