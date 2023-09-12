import React from 'react';
import CurrencyRow from './CurrencyRows';
import { useState, useEffect } from 'react';
import axios from 'axios';



const Convert = () => {

    const [firstCurrency, setFirstCurrency] = useState('USD');
    const [secondCurrency, setSecondCurrency] = useState('USD');
    const [amount1, setamount1] = useState(1);
    const [amount2, setamount2] = useState(1);
    const [rates, setRates] = useState([]);

    useEffect(() =>{

        axios.get('http://data.fixer.io/api/latest?access_key=eef29ecc08fde829f42632e34c7a2e0c').then(response =>{
            setRates(response?.data?.rates)


        })
    }, []);

    function handleAmount1Change(amount1){
        setamount2(amount1*rates[secondCurrency] / rates[firstCurrency]);
        setamount1(amount1)
    }

    function handleCurrency1Change(firstCurrency){
        setamount2(amount1*rates[secondCurrency] / rates[firstCurrency]);
        setFirstCurrency(firstCurrency);

    }



    function handleAmount2Change(amount2){
        setamount1(amount2*rates[firstCurrency] / rates[secondCurrency]);
        setamount2(amount2)
    }

    function handleCurrency2Change(secondCurrency){
        setamount1(amount2*rates[firstCurrency] / rates[secondCurrency]);
        setSecondCurrency(secondCurrency);

    }



  return (
    <div className=' text-white'>
        <div className='flex justify-center text-center bg-slate-500 opacity-80'>
        <p className='text-[30px]'>Convert Currency</p> 

        </div>
        <div className='flex justify-center items-center'>
        <div className='rounded-lg p-3 bg-slate-600 mt-[40px] border border-green-600 shadow-xl'>
            <p className='text-xl flex justify-center items-center p-2 '> Select Currencies</p>
            <div>
            <CurrencyRow 
            currencies={Object.keys(rates)} 
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            amount={amount1} 
            currency={firstCurrency}/>
            </div>
            =
            <div>
                <CurrencyRow 
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
                currencies={Object.keys(rates)} 
                amount={amount2} 
                currency={secondCurrency}/>
            </div>

        </div>
        </div>
        
       
        </div>
  )
}

export default Convert