import React from 'react';
import Cocktail from './cocktail.jpg'
import { useLocation, Link } from 'react-router-dom'

const Result = (props) => {

    const jimjimminy = props.whatUserWants;

    const location = useLocation()
    const { stock } = location.state
  




    const resultComponents = 
        // <div>
        //     <hr />
        //     <span>
        <div className="container bg-gray-100 rounded shadow border p-8 m-10">
            {/* <div className="bg-indigo-300 rounded-lg center">
            <img className="object-cover h-48 w-96 rounded-lg  " src={Cocktail}>
            </img>
            </div> */}

        <section className="container max-w-sm mx-auto pb-10">
        <img className="mx-auto rounded-3xl" src={Cocktail} alt="dream" />
        </section>

            
            <p className="text-3xl text-gray-700 font-bold mb-5">
                Sorry {jimjimminy.userName} ... You could have made
            </p>
                <p className="text-3xl text-rose-700 font-bold mb-5">
                {jimjimminy.currency}  {Math.round(((jimjimminy.amount/stock.minPrice)*stock.maxPrice - jimjimminy.amount)*100)/100}
                </p>
          
        
                <p className="text-xl text-bg-gray-700 text-center">If you had only bought: </p>
          
                <p className="text-rose-700 mt-5 text-xl font-bold text-center">
                    {jimjimminy.currency} {jimjimminy.amount} worth of {stock.companyName} stock </p>

                <p className="text-blue-700 mt-5 mb-5 text-xl text-center font-bold">in {stock.minPriceDate}, when the price was USD {stock.minPrice} </p>
                <p className="text-xl text-bg-gray-700 text-center">and sold it</p>
                <p className="text-blue-700 mt-5 mb-5 text-xl text-center font-bold">in {stock.maxPriceDate} when the price was USD {stock.maxPrice}</p>
                
            
                <Link to='/' >
                <button className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm w-24 sm:w-auto px-2 py-2 text-center dark:bg-blue-600 
                dark:hover:bg-blue-700 dark:focus:ring-blue-800">Try again</button>
                 </Link>

        </div >




    return (

     <>
                { resultComponents }
    
                </>
    );
};

export default Result;