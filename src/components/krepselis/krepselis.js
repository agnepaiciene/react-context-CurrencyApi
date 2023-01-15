import PrekiuSarasas from "./inner/prekiuSarasas";
import PridetiPreke from "./inner/pridetiPreke";
// import Card from "../UI/card";


import {useState, useEffect, useContext} from "react";
import ProductsContext from "../context/productsContext";
// import Footer from "../footer";


const Krepselis=(props)=>{

    // let initPrekes=[
    //     {pavadinimas: "Pienas", kiekis:1},
    //     {pavadinimas: "Duona", kiekis:2}
    // ]


    return(
        <div className="row mt-5">
           <div className="col-md-6">
               <PridetiPreke></PridetiPreke>
           </div>

            <div className="col-md-6">

                <PrekiuSarasas></PrekiuSarasas>

            </div>

        </div>
    )
}

export default  Krepselis;