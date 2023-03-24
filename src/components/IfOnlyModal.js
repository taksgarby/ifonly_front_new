import React, { useState } from "react";
import Modal from "react-modal";
import Button from 'react-bootstrap/Button';
import './modal.css';
import styled from "styled-components";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 700,
    height: 500
  },
};




function IfOnlyModal(currency, amount, name, stock) {

    const KeyWordRed = styled.div`
    color: #780000;
    padding: 0.5rem;
    `
    
    const KeyWordBlue = styled.div`
    color: #03045e;
    padding: 0.5rem;
    `


  const [modalOpen, setModalOpen] = useState(false);

  const resultComponents = 
  <div>
      <hr />
      <span>
         
          <p>If you had only bought 
          <KeyWordRed><strong> {currency} {amount} </strong></KeyWordRed>
          worth of 
          <KeyWordBlue><strong>{stock.companyName} stock </strong></KeyWordBlue>
          in <KeyWordBlue>{stock.minPriceDate}</KeyWordBlue> and sold it 
          in <KeyWordBlue>{stock.maxPriceDate}</KeyWordBlue> ...
          <br/>
          You could have made 
      

          <KeyWordRed><strong>{currency}  {Math.round(((amount/stock.minPrice)*stock.maxPrice - amount)*100)/100}</strong></KeyWordRed>
      </p>
    
      </span>


  </div >

  return (
    <div className="App">
      <div class="modal-open-button">
      <Button varient="secondary" size="sm" onClick={setModalOpen}>Class Diagram</Button>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <div class="diagram">
        { resultComponents }
    

        </div>
      <div class="modal-close-button">
        <Button varient="secondary" size="sm" onClick={() => setModalOpen(false)}>Close</Button>
      </div>
      </Modal>
    </div>
  );
}

export default IfOnlyModal;