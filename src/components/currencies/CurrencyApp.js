import {useEffect, useState} from "react";
import CurrencyInput from "./CurrencyInput";



const CurrencyApp=()=>{
    /*
        async function loadAcync(){
            setLoading(true);
            let result=await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
            let data=await result.json();
            setJoke(data.joke);
            setLoading(false);
        }
    */
    const [currencies, setCurrencies]=useState("");
    // const [isLoading,setLoading]=useState(false);
    // const [category,setCategory]=useState("Dark");

    const [amount1,setAmount1] = useState(1);
    const [amount2,setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState("GBP");
    const [currency2, setCurrency2] = useState("EUR");
    const [rates, setRates] = useState([]);

    const load=()=>{
        // setLoading(true);
        fetch("https://api.frankfurter.app/latest?from=USD")
            .then((result)=>{
                return result.json();
            })
            .then((data)=> {
                setRates(data.rates);
                // setLoading(false);
            });
    }

    useEffect(()=>{
        load();
    }, []);

    // let changeCategory=(event)=>{
    //     setCategory(event.target.value);
    //
    // }

    useEffect( () =>
    {
        if(!!rates){
            handleAmount1Change(1);
        }
    }, [rates]);

    function format(number) {
        return number.toFixed(4);
    }

    function  handleAmount1Change(amount1){
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setAmount1(amount1);
    }

    function handleCurrency1Change(currency1){
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setCurrency1(currency1);
    }

    function  handleAmount2Change(amount2){
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setAmount2(format(amount2));
    }

    function handleCurrency2Change(currency2){
        setAmount1(amount2 * rates[currency1] / rates[currency2])
        setCurrency2(currency2);
    }

    return (
        <div className="mt-5">
            {/*{ (isLoading)? <div className="spinner-border text-primary"></div> : <div className="alert alert-info"> { currencies } </div>  }*/}
            {/*<hr />*/}
            <div className="mb-3">
                <h1>Valiutos skaičiuoklė</h1>
                <CurrencyInput
                    onAmountChange={handleAmount1Change}
                    onCurrencyChange={handleCurrency1Change}
                    currencies={Object.keys(rates)}
                    amount={amount1}
                    currency={currency1}>

                </CurrencyInput>

                <CurrencyInput
                    onAmountChange={handleAmount2Change}
                    onCurrencyChange={handleCurrency2Change}
                    currencies={Object.keys(rates)}
                    amount={amount2}
                    currency={currency2}>

                </CurrencyInput>
                <hr></hr>
                {/*<label className="form-label">Kategorija:</label>*/}
            </div>

            {/*<button className="btn btn-success" onClick={ load }>Užkrauti</button>*/}
        </div>

    )
}
export default CurrencyApp;