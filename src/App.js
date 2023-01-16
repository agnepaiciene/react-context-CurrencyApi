// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Krepselis from "./components/krepselis/krepselis";
import Footer from "./components/footer";
import {useState} from "react";
import ProductsContext, {ProductContextProvider} from "./components/context/productsContext";
import Anekdotas from "./components/currencies/CurrencyApp";
import CurrencyInput from "./components/currencies/CurrencyInput";
import CurrencyApp from "./components/currencies/CurrencyApp";


function App() {



  return (
    <div className="container">
        <ProductContextProvider>
            {/*<CurrencyInput></CurrencyInput>*/}
            <CurrencyApp></CurrencyApp>
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
