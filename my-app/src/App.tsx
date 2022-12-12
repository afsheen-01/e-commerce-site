import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Cart } from './Cart';
import { Login } from './Login';
import { OrderSummary } from './OrderSummary';
import { Products } from './Products';
import { Header } from './Header';
import { Footer } from './Footer';
import { Home } from './Home';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
const queryClient = new QueryClient()
  return (
    <VStack align="stretch">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Box h="63vw" border="1px solid">
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/products' element={<Products />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/summary' element={<OrderSummary />} />     
          </Routes>
        </Router>
        </Box>
        <Footer />
    </QueryClientProvider>
    </VStack>
   
    
  );
}

export default App;
