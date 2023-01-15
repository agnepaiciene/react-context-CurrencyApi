import Card from "../../UI/card";
import {useContext, useState} from "react";
import ProductsContext from "../../context/productsContext";

const PridetiPreke=(props)=>{

    const initValue={
        pavadinimas:"",
        kiekis:""
    };

    const [preke, setPreke]=useState(initValue);
    const [pavadinimasTouched, setPavadinimasTouched]=useState(false);
    const productsCtx=useContext(ProductsContext);
    const isPavadinimasInValid=preke.pavadinimas==" ";

  const  onFormSubmit=(event)=>{
      event.preventDefault();
      if (isPavadinimasInValid) return ;
      productsCtx.pridetiPreke(preke);
      //props.onPridetiPreke(preke);
      setPreke(initValue);
      setPavadinimasTouched(false);
      console.log("Pridedame preke");

  }

      const onPavadinimasChange=(event)=>{
          setPreke({
              ...preke,
              pavadinimas: event.target.value,
          });
       }
       console.log(preke);

    const onKiekisChange=(event)=>{
        setPreke({
            ...preke,
            kiekis: event.target.value,
        });
    }

return (
     <Card title="Prideti nauja preke">
          <form onSubmit={onFormSubmit}>
              <div className="mb-3">
                  <label className="form-label">Pavadinimas</label>
                  <input type="text" className="form-control" onBlur={ ()=>setPavadinimasTouched(true) } onChange={onPavadinimasChange} value={preke.pavadinimas}/>
                  { isPavadinimasInValid && pavadinimasTouched ? <div className="alert alert-danger">Pavadinimas neteisingas</div>:" "}
              </div>
              <div className="mb-3">
                  <label className="form-label">Kiekis</label>
                  <input type="text" className="form-control" onChange={onKiekisChange} value={preke.kiekis}/>
              </div>
              <button className="btn btn-success">Prideti preke</button>
          </form>
     </Card>

)




}
export  default PridetiPreke;