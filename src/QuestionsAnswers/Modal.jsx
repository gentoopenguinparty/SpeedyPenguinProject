import React from 'react'
//import './Modal.css'
import {Modalpop, ModalOverlay, ButtonM} from './styles/Modal.styled.js';
import ReactDOM from "react-dom";
import {MainContainer} from './styles/Main.styled.js'




const Modal = ({ openModal, setOpenModal, productData, setAskQuestionData, askQuestionData, handleSubmit}) =>   (
  <MainContainer>
  <div className="modal">
    <Modalpop className="modal-pop" role="dialog" aria-modal="true">
    <header>
    <h1 className="title">Ask Your Question</h1>
      <h2 className="title">about the {productData.name}</h2>
    </header>



       <form>
        <label>Your Question*</label><br></br>
        <textarea placeholder="Type your question here" required="required" rows="7" cols="50" maxLength="1000" onChange={(e)=> setAskQuestionData({...askQuestionData, body: e.target.value, product_id: productData.id })}></textarea><br></br><br></br>
        <label>What is your nickname?*</label><br></br>
        <input type="text" placeholder="Example: jackson11!"
required="required" onChange={(e)=> setAskQuestionData({...askQuestionData, name: e.target.value })}></input><br></br>
         <small>*For privacy reasons, do not use your full name or email address</small><br></br><br></br>
         <label>Your email*</label><br></br>
        <input type="text" placeholder="Why did you like the product or not?"
required="required" onChange={(e)=> setAskQuestionData({...askQuestionData, email: e.target.value })}></input><br></br>
         <small>*For authentication reasons, you will not be emailed</small><br></br><br></br>

       </form><br></br>

      <ButtonM type="submit" onClick={handleSubmit}>Submit</ButtonM>
      <ButtonM type="button" onClick={() => setOpenModal(false)}>Cancel</ButtonM>
    </Modalpop>
    <ModalOverlay className="modal-overlay"></ModalOverlay>
  </div>
  </MainContainer>
)

export default Modal;
