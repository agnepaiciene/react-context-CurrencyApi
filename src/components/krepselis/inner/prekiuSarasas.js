import Card from "../../UI/card";
import PrekeItem from "./prekeitem";
import ProductsContext from "../../context/productsContext";
import {useContext} from "react";

const PrekiuSarasas=(props)=>{

    const productsCtx=useContext(ProductsContext);

let prekiuSarasas=[];
    productsCtx.products.forEach((preke, index)=>{
       prekiuSarasas.push(
             (<PrekeItem key={index} preke={ {...preke, key:index} } onTrintiPreke={props.onTrintiPreke}></PrekeItem>)
    );
    })

return(

      <Card title="Prekių sąrašas">
         <ul className="list-group">
             {prekiuSarasas}
         </ul>
          { productsCtx.products.length===0 ? <div className="alert alert-info">Prekių nėra</div> : " "}

      </Card>


)

}
export  default PrekiuSarasas;