import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import Stock from './Stock';
import { Link } from "react-router-dom";


const StockList = ({  name, amount, currency }) => {


    const [ifOnlyStocks, setIfOnlyStocks] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/ifonlystocks")
            .then((res) => res.json())
            .then((ifOnlyStocksData) => setIfOnlyStocks(ifOnlyStocksData));
    }, []);

    const getIfOnlyStockById = (id) => {
        ifOnlyStocks.find((ifOnlyStock) => ifOnlyStock.id === id);
    }

  const StockList = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    `


    const stockComponents = ifOnlyStocks.map(stock => {
        return (
            <Stock key={stock.id} stock={stock} >
                <Link to = '/result'>

                </Link>
            </Stock>
        )
    })

    const UserInfo = styled.div`
      font-family: 'Amatic SC', cursive;
      margin: 0px;
      padding: 0px;
  
    `
  

    return (
    <>
    <UserInfo>
    <p class="welcome">Welcome { name } <br/>
    You have { amount } { currency } you could have invested</p>
    </UserInfo>
    <StockList>
      {stockComponents}
    </StockList>




</>
  );
};


export default StockList;