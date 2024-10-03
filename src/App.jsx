import "./App.css";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";

import Contact from "./pages/Contact";
import ProductScreen from "./pages/ProductScreen";
import Authentication from "./pages/Authentication";
import LandingPage from "./pages/LandingPage";
import Sell from "./pages/Sell";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage/>}></Route>
        <Route path="/rent" element={<Home/>}/>
        <Route path= '/contact' element={<Contact/>}/>
        <Route path = '/product/:id' element={<ProductScreen/>}/>
        <Route path="/sell" element={<Sell />}/>
        <Route path="/auth" element={<Authentication/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
