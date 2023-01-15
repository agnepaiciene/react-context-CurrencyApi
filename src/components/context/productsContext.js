
import React, {useEffect, useState} from "react";

const ProductsContext=React.createContext({
    products:[
        {pavadinimas: "Kazkas", kiekis:2}

    ],
    pridetiPreke:(product)=>{},
    trintiPreke:(index)=>{}
});

export const ProductContextProvider=(props)=>{
    const [prekes, setPrekes]=useState([]);

    const issaugotiPrekes=()=>{
        localStorage.setItem("prekes", JSON.stringify(prekes));
    }
    const pridetiPreke=(preke)=>{
        prekes.push(preke);
        issaugotiPrekes();
        setPrekes(Array.from(prekes));

        console.log("Preke gauta ir prideta");
        console.log(preke);
        console.log(prekes);
    }
    const trintiPreke=(index)=>{
        prekes.splice(index, 1);
        issaugotiPrekes();
        setPrekes(Array.from(prekes));

        console.log(prekes);
        console.log("Triname:" +index);

    };

     useEffect( ()=>{
            const data=localStorage.getItem("prekes");
            if (data!=null){
              const initPrekes = JSON.parse(data);
                setPrekes(initPrekes);
            }
        }, []);

    return(

            <ProductsContext.Provider value={
                {
                products:prekes,
                pridetiPreke:pridetiPreke,
                trintiPreke:trintiPreke
            }
            }>
                {props.children}
            </ProductsContext.Provider>

    );
}
export default ProductsContext;