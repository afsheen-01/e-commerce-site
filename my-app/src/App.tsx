import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { OrderSuccess } from "./components/summary/OrderSuccess";
import { Products } from "./pages/Products";
import { Home } from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { getTheme } from "./utils/getTheme";
import { store } from "./redux/store";

const App = () => {
  const queryClient = new QueryClient();
  const theme = getTheme();

  return (
    <Box m={0}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/summary" element={<OrderSuccess />} />
              </Routes>
            </Router>
          </ChakraProvider>
        </QueryClientProvider>
      </Provider>
    </Box>
  );
};

export default App;
