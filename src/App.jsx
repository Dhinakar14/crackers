import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './layouts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'; 
import Aboutus from './Pages/Aboutus';
import Pricelist from './Pricelist';
import Giftbox from './Pages/Giftbox';
import Productcard from './Pages/Productcard';
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>} >
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} /> 
          <Route path='/price' element={<Pricelist />} />  
          <Route path='giftbox' element={<Giftbox />} />
          <Route path='/product' element={<Productcard />} />
                </Route>
          
              </Routes></Router>
    </>
  )
}

export default App
