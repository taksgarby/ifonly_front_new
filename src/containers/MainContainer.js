import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StockList from '../components/StockList';
import Result from '../components/Result';

const MainContainer = () => {


    return ( 
        <div class="container">
        <Router>
        <Routes>
  
        <Route path="/welcome" exact element={ <StockList />} />
  
        <Route path="/result" element={<Result/>} />
        <Route path="/" element={<Form />}/>
        </Routes>
        </Router>
        </div>
     );
}
 
export default MainContainer;