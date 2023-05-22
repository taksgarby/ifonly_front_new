import React, {useState} from 'react';
import StockList from './StockList';


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
    



    const handleFormSubmit = (evt) => {
        evt.preventDefault();

    
        const userQueryData = {
          userName: name,
          amount: amount,
          currency: currency
        }

        props.OnSaveUserQueryData(userQueryData);
        console.log(userQueryData);
        setFormSubmitted(true);

     }


  return ( 
    <>

    <form onSubmit={handleFormSubmit}>

      <div className="mt-10 ml-10 pt-10 pl-10">
      
      <div className='pl-5'>
   
        <p class="font-bold mb-3 text-gray-900 dark:text-gray-400 
        first-line:uppercase 
        first-line:tracking-widest 
        dark:first-letter:text-gray-100 text-4xl ">
        Welcome to If Only App 
        </p>
        <p class="pl-7 pr-7 text-left text-gray-800 text-3xl dark:text-gray-400">
         If you recreationally lament on things you could have done but did not, 
        this app is for you! <br></br>  
        Simply type in your name and the amount of money of your chosen currency that you had in your bank, 
        staying inactively, at some point in the last 5 years. 
        </p>


       </div>
      <div className="relative flex flex-row flex-nowrap justify-center 
       mt-10 mb-5">

      <div className="mr-4">
        <label htmlFor="name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
          Your Name
        </label>
      
        <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Your Name"   value={name} onChange={handleName} required>
        </input>
      </div>

      <div class="mr-4">
        <label htmlFor="amount" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
          Amount
        </label>
        <input type="number" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        value={amount}
        onChange={handleAmountChange} required>
        </input>
      </div>

      <div className="mr-4">
        <label htmlFor="currency" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
          Currency
        </label>
        
        <select id="currency" value={currency} onChange={handleCurrencyChange} 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
         required>
          <option value="" disabled>Choose...</option>
          <option id="USA" value="USD">USD</option>
          <option id="GBP" value="GBP">GBP</option>
        </select>
      </div>
      
      <div className="mt-8">
        <button type="submit" 
        className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
        font-medium rounded-lg text-lg w-full sm:w-auto px-3 py-2 text-center dark:bg-blue-600 
        dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div>
      </div>
      </div>
    </form>
      {formSubmitted && <StockList name={name} amount={amount} currency={currency}/>}
  </>
  )  
}
 
export default InputForm;