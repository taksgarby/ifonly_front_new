import React, { useState, useEffect } from 'react';
import InputForm from '../components/InputForm';
import Header from '../components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StockList from '../components/StockList';
import Result from '../components/Result';

const MainContainer = () => {
    const [userQueryData, setUserQueryData] = useState();

    const saveUserQueryDataHandler = (enteredUserQueryData) => {
        // userQueryData = {
        //     ...enteredUserQueryData,
        //     id: Math.random().toString()
        // };
        setUserQueryData({
                 ...enteredUserQueryData,
                 id: Math.random().toString()
             });
        console.log("Logging enriched user query data");
        console.log(userQueryData);
    }

    return ( 
        <div class="container">
        <Router>
        <Routes>
  
        <Route path="/welcome" exact element={ <StockList />} />
  
        <Route path="/result" element={<Result whatUserWants={userQueryData}/>} />
        <Route path="/" element={<InputForm OnSaveUserQueryData={saveUserQueryDataHandler} />}/>
        </Routes>
        </Router>
        </div>
     );
}
 
export default MainContainer;