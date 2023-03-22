import React, {useState} from 'react';
import styled from 'styled-components';
import Stock_img from "./stock_img.png";
import Result from './Result';

const Stock = ({ stock, name, currency, amount }) => {

  const [showResult, setShowResult] = useState(false);

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

  const onClick = () => {
    setShowResult(true);
  }






return (

    <StockItem>
   


    <CompanyName>{stock.companyName}</CompanyName>
    <StockDetails>{stock.country}</StockDetails>
 
    <StockDetails>{stock.industryType}</StockDetails>
    <StockImage><img src={Stock_img} width="100" height="80"/></StockImage>

    <button onClick={onClick} >If Only</button>
    {showResult && <Result stock={stock} name={name} currency={currency} amount={amount}/>}
    {/* <input 
          type="number"
          placeholder="Amount"
          value={enteredAmount}
          onChange={handleAmountChange}			// NEW
        />
        <input 
          type="text"
          placeholder="Currency"
          value={enteredCurrency}
          onChange={handleCurrencyChange}				// NEW
        />
         <input 
          type="submit"
          value="Post" />
</form> */}
  </StockItem>

);
};





export default Stock;