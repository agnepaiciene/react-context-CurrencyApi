// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Krepselis from "./components/krepselis/krepselis";
import Footer from "./components/footer";
import {useState} from "react";
import ProductsContext, {ProductContextProvider} from "./components/context/productsContext";


function App() {



  return (
    <div className="container">
        <ProductContextProvider>
           <Krepselis></Krepselis>
             <nav className="navbar fixed-bottom bg-body-tertiary">
                 <div className="container-fluid">
                     <Footer></Footer>

                  </div>
             </nav>
        </ProductContextProvider>
    </div>
  );
}

export default App;
