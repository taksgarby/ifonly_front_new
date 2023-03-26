import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'

const Result = (props) => {

    const jimjimminy = props.whatUserWants;

    const location = useLocation()
    const { stock } = location.state
  




    const resultComponents = 
        // <div>
        //     <hr />
        //     <span>
        <div className="container bg-gray-100 rounded shadow border p-8 m-10">
            <p className="text-3xl text-gray-700 font-bold mb-5">
                Sorry {jimjimminy.userName} ...
            </p>
                <p className="text-bg-gray-500 text-left">If you had only bought: </p>
          
                <p className="text-rose-700 mt-5 text-xl font-bold text-center">
                    {jimjimminy.currency} {jimjimminy.amount} worth of {stock.companyName} stock </p>

                <p className="text-blue-700 mt-5 mb-5 text-xl text-center font-bold">in {stock.minPriceDate}, when the price was USD {stock.minPrice} </p>
                <p className="text-bg-gray-500 text-left">and sold it:</p>
                <p className="text-blue-700 mt-5 mb-5 text-xl text-center font-bold">in {stock.maxPriceDate} when the price was USD {stock.maxPrice}</p>
                
                <p className="text-bg-gray-500 text-left">You could have made:</p>
                <p className="text-3xl text-rose-700 font-bold mb-5">
                {jimjimminy.currency}  {Math.round(((jimjimminy.amount/stock.minPrice)*stock.maxPrice - jimjimminy.amount)*100)/100}
                </p>
          
        


        </div >




    return (

     <>
                { resultComponents }
    
                </>
    );
};

export default Result;