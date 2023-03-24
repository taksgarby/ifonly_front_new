import React, {useState} from 'react';
import StockList from './StockList';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { LockClosedIcon } from '@heroicons/react/solid'


const InputForm = (props) => {

    const [name, setName] = useState('');  
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleName = (evt) => {
      setName(evt.target.value);
    }

    const handleAmountChange = (evt) => {
        setAmount(evt.target.value);
      }
    
    const handleCurrencyChange = (evt) => {
        setCurrency(evt.target.value);
      }
    
      const navigate = useNavigate();


    const handleFormSubmit = (evt) => {
        evt.preventDefault();

        // if (amount && name){
        //       return <StockList name = {name} amount = {amount} currency = {currency} />
        //     }
        const userQueryData = {
          userName: name,
          amount: amount,
          currency: currency
        }

        props.OnSaveUserQueryData(userQueryData);
        console.log(userQueryData);
        setFormSubmitted(true);
        // navigate('/welcome', {name, amount, currency});
  
     }


    return ( 
        <>

        <form onSubmit={handleFormSubmit}>

        <div className="relative flex flex-row flex-nowrap justify-center 
         mt-5 mb-5">
        {/* min-h-screen overflow-hidden */}
        <div className="mr-2">
        <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
        <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Your Name"   value={name} onChange={handleName} required>
        </input>
        </div>

        <div class="mr-2">
        <label htmlFor="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
        <input type="number" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        value={amount}
        onChange={handleAmountChange} required>
        </input>
        </div>

        <div className="mr-2">
         <label htmlFor="currency" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Currency</label>
        <select id="currency" value={currency} onChange={handleCurrencyChange} 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
         required>
          <option value="" disabled>Choose...</option>
          <option id="USA" value="USD">USD</option>
          <option id="GBP" value="GBP">GBP</option>
        </select>
     
        {/* </div>

        <div className="relative flex flex-row justify-center min-h-screen overflow-hidden mt-5"> */}
          </div>
        <div className="mt-7">
        <button type="submit" 
        className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
        font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 
        dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
        </div>
        {/* <div className="mr-2">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 
        focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 
        dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required> </input>
     
  
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
       */}
   

      </form>
      {formSubmitted && <StockList name={name} amount={amount} currency={currency}/>}
  </>
  )
{/*  
          <div class="form-container">
          <div class="name-input-wrapper">
          <label htmlFor="name-label">Your Name:</label>
          </div>
          <div class="name-input">
          <input 
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleName}			// NEW
          />
          </div>
          <div class="amount-input-wrapper">
          <div class="amount-label">
          <label htmlFor="amount">Amount:</label>
          </div>
          <div class="amount-input">
          <input 
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={handleAmountChange}			// NEW
          />
          </div>
          </div>
          <div class="currency-input-wrapper">
          <label htmlFor="curency">Currency:</label>
          </div>
          <div class="currency-label">
          <div class="currency-input">
          <select id="currency" value={currency} onChange={handleCurrencyChange}>
          <option value="" disabled>Choose...</option>
          <option id="USA" value="USD">USD</option>
          <option id="GBP" value="GBP">GBP</option>
          </select> 
          
          </div>
             <div class="grid-item"></div>
           <div class="grid-item">
           {/* <Link to="/welcome"><Button onClick={handleFormSubmit} text={"Submit"}></Button></Link> */}
           {/* <button type='submit'>Submit</button> */}
           {/* <Link to="/result"><Button onClick={onClick} text={"If Only"}></Button></Link> */}
            {/* </div>
            </div> */} 
    //         </form>
    //    {formSubmitted && <StockList name={name} amount={amount} currency={currency}/>}
    //     </>
    //  );
}
 
export default InputForm;