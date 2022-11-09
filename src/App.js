import { Route, Routes } from 'react-router-dom';
import Login from './@auth/LoginComponenet/Login';
import Register from './@auth/RegisterComponent/Register';
import ProductListing from './@components/productListingComponent/ProductListing';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-listing" element={<ProductListing />} />
      </Routes>
    </div>
  );
}

export default App;
