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
  font-family: roboto;
`

  const CompanyName = styled.div `
    padding: 0.5rem;
    margin-top: 0.5rem;
    color: Pet rock;
    font-size: 1.5rem;
  `
  const StockDetails = styled.div `
    padding: 0.3rem;
    color: Snorlax;

  `

  const StockImage = styled.image`
    margin: 5px;
  `




return (

    <StockItem>
   


    <CompanyName>{stock.companyName}</CompanyName>
    <StockDetails>{stock.country}</StockDetails>
 
    <StockDetails>{stock.industryType}</StockDetails>
    <StockImage><img src={Stock_img} width="100" height="80"/></StockImage>

    {/* <button onClick={onClick} >If Only</button> */}
    <Link to='/result'
           state= {{ stock: stock}}
          >
            {/* <Link to="/result"> */}
            <Button text="click" /></Link>
    {/* {showResult && <IfOnlyModal stock={stock} name={name} currency={currency} amount={amount}/>} */}

  </StockItem>

);
};





export default Stock;