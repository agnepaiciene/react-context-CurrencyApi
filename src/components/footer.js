import ProductsContext from "./context/productsContext";
import {useState, useEffect, useContext} from "react";
const Footer=()=>{

    const productsCtx=useContext(ProductsContext);

    return(
        <div className="col-md-12">
            <div className="alert alert-danger">Prekių krepšelyje: { productsCtx.products.length }</div>
        </div>
    );
}
export default Footer;