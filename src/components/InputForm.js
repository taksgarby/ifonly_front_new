import React, {useState} from 'react';
import StockList from './StockList';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
        <Form onSubmit={handleFormSubmit}>
 
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
           <Button type='submit' variant = "primary">Submit</Button>
           {/* <Link to="/result"><Button onClick={onClick} text={"If Only"}></Button></Link> */}
            </div>
            </div>
            </Form>
       {formSubmitted && <StockList name={name} amount={amount} currency={currency}/>}
        </>
     );
}
 
export default InputForm;