import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import AllProducts from './components/Products'; 
import SpecificProduct from './components/specificProduct'; 
import ModifyProduct from './components/ModifyProductPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import FooterInformation from './components/PageFooter';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allproducts" element={<AllProducts />} /> 
        <Route path="/modifyproduct" element={<ModifyProduct />} />
        <Route path="/product/:id" element={<SpecificProduct />} /> 
      </Routes>
      <FooterInformation />
    </>
  );
}

export default App;