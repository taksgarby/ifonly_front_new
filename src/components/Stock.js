import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Stock_img from "./stock_img.png";
import Result from './Result';
import IfOnlyModal from './IfOnlyModal';
import Button from './reusable/Button';
import { Link, useParams } from "react-router-dom";

const Stock = ({ stock, name, currency, amount }) => {

//   const [showResult, setShowResult] = useState(false);
//   const [selectedStock, setSelectedStock] = useState(null);

const [selectedStock, setSelectedStock] = useState({});
const { id } = useParams()



  const StockItem = styled.div `

    display: flex;
    flex-direction: column;
    height: 270px;
    width: 150px;
    box-shadow: 2px 2px 4px grey;
    margin: 15px;
    background-color: white;
  
    border-radius: 5px 50px;

`

  const CompanyName = styled.div `
    padding: 0.5rem;
    margin-top: 0.5rem;
    font-size: 1.5rem;
  `
  const StockDetails = styled.div `
    padding: 0.2rem;
    color: Snorlax;

  `

  const StockImage = styled.image`
    margin: 5px;
    margin-left: auto;
    margin-right: auto;
  `




return (

    <StockItem>
   


    <CompanyName>{stock.companyName}</CompanyName>
    <StockDetails>{stock.country}</StockDetails>
 
    <StockDetails>{stock.industryType}</StockDetails>
    <StockImage><img src={Stock_img} width="100" height="80"/></StockImage>

    {/* <button onClick={onClick} >If Only</button> */}

            {/* <Link to="/result"> */}
            {/* <Button text="click" /> */}
    {/* {showResult && <IfOnlyModal state= {{ stock: stock}}/>} */}
    <Link to='/result'
           state= {{ stock: stock}}
          >
    <button text="if only" 
        className="text-white bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
        font-medium rounded-lg text-sm w-24 sm:w-auto px-1 py-1 text-center dark:bg-blue-600 
        dark:hover:bg-blue-700 dark:focus:ring-blue-800">If Only</button>
        </Link>
  </StockItem>

);
};





export default Stock;