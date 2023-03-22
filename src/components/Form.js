import React, {useState} from 'react';
import StockList from './StockList';

const Form = () => {

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

        // if (amount && name){
        //       return <StockList name = {name} amount = {amount} currency = {currency} />
        //     }
     
        setFormSubmitted(true);
  
     }


    return ( 
        <>
         <form className='inputForm' onSubmit={handleFormSubmit}>
          <div class="form-grid-container">
          <div class="grid-item">
          <label htmlFor="name">Your Name:</label>
          </div>
          <div class="grid-item">
          <input 
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleName}			// NEW
          />
          </div>
          <div class="grid-item">
          <label htmlFor="amount">Amount:</label>
          </div>
          <div class="grid-item">
          <input 
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={handleAmountChange}			// NEW
          />
          </div>
          <div class="grid-item">
          <label htmlFor="curency">Currency:</label>
          </div>
          <div class="grid-item">
          <select id="currency" value={currency} onChange={handleCurrencyChange}>
          <option value="" disabled>Choose...</option>
          <option id="USA" value="USD">USD</option>
          <option id="GBP" value="GBP">GBP</option>
          </select> 
          </div>
             <div class="grid-item"></div>
           <div class="grid-item">
           {/* <Link to="/welcome"><Button onClick={handleFormSubmit} text={"Submit"}></Button></Link> */}
           <button type='submit'>Submit</button>
      
            </div>
            </div>
        </form>
       {formSubmitted && <StockList name={name} amount={amount} currency={currency}/>}
        </>
     );
}
 
export default Form;