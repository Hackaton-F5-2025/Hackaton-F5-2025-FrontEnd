import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProductList from './Pages/ProductList';
import ProductDetail from './Pages/ProductDetail';

const theme = createTheme ({
  palette: {
    primary: {
      main: '#ABFFBC',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});





function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
    </ThemeProvider>
  );
}

export default App;

