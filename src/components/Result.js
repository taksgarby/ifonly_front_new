import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'

const Result = (props) => {

    const jimjimminy = props.whatUserWants;

    const location = useLocation()
    const { stock } = location.state
  
  
    const ResultBox = styled.div`
        width:80%;
        margin: auto;
        padding: 10px;
        background-color: lightgrey;
        color: #003049;
        box-shadow: 4px 4px 4px 4px grey;
    `

    const KeyWordRed = styled.div`
        color: #780000;
        padding: 0.5rem;
    `

    const KeyWordBlue = styled.div`
        color: #03045e;
        padding: 0.5rem;
    `

    const RemoveButton = styled.button `
        background-color: #495057;
        color: #fdf0d5;
        margin: 5px;
        padding: 5px;

        border-radius: 8px;
     `

    const resultComponents = 
        <div>
            <hr />
            <span>
               
                <p>If you had only bought 
                <KeyWordRed><strong> {stock.currency} {stock.amount} </strong></KeyWordRed>
                worth of 
                <KeyWordBlue><strong>{stock.companyName} stock </strong></KeyWordBlue>
                in <KeyWordBlue>{stock.minPriceDate}</KeyWordBlue> and sold it 
                in <KeyWordBlue>{stock.maxPriceDate}</KeyWordBlue> ...
                <br/>
                You could have made 
            amount is {jimjimminy.amount}
minPrice is {stock.minPrice}
maxPrice is {stock.maxPrice}

                <KeyWordRed><strong>{stock.currency}  {Math.round(((stock.amount/stock.minPrice)*stock.maxPrice - stock.amount)*100)/100}</strong></KeyWordRed>
            </p>
          
            </span>


        </div >




    return (
        <ResultBox>
        <h2>If Only: </h2>

     
                { resultComponents }
    
            <p>Try another stock</p> } 
       

  
        </ResultBox>
    );
};

export default Result;
