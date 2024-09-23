import "./App.css";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductScreen from "./pages/ProductScreen";
import Authentication from "./pages/Authentication";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path= '/contact' element={<Contact/>}/>
        <Route path = '/product/:id' element={<ProductScreen/>}/>
        <Route path="/auth" element={<Authentication/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
