import React from 'react'
//import './Modal.css'
import {Modalpop, ModalOverlay, Button} from './styles/Modal.styled.js';
import ReactDOM from "react-dom";
import {MainContainer} from './styles/Main.styled.js'
import { API_KEY } from '../../config';



// Your Question (mandatory)
// This text input should be a large text window allowing up to 1000 characters.
// 1.3.5.2. What is your nickname (mandatory)
// A text input allowing up to 60 characters for the user’s display name.
// Placeholder text should read: “Example: jackson11!”.
// Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.
// 1.3.5.3. Your email (mandatory)
// A text input allowing up to 60 characters.
// Placeholder text should read: “Why did you like the product or not?”.
// Below this field, the text “For authentication reasons, you will not be emailed” will appear.
// 1.3.5.4. Submit question (button)
// A button by which the question can be submitted.
// Upon selecting this button the form’s inputs should be validated. If there are any invalid entries, the submission should be prevented, and a warning message will appear. This message should be titled “You must enter the following:”
// This error will occur if :
// Any mandatory fields are blank
// The email address provided is not in correct email format

// const Modal = ({openModal}) => openModal ? ReactDOM.createPortal(


//     <div className="modalBackground">
//       <div className="modalContainer">
//         <div className="close btn">
//         <button onClick={()=> closeModal(false)}>X</button>
//         </div>
//        <div className="modalTitle">
//         <h1>Add A Question</h1>
//        </div>
//        <div className="body">
//         <p>put the form in here</p>
//        </div>
//        <div className="footer">
//         <button>cancel</button> <button>submit</button>
//        </div>
//       </div>
//     </div>, document.body

//   ): null;

//   export default Modal



const Modal = ({ openModal, setOpenModal, productData, setAskQuestionData, askQuestionData, handleSubmit}) =>   (
  <MainContainer>
  <div className="modal">
    <Modalpop className="modal-pop" role="dialog" aria-modal="true">
    <header>
    <h1 className="title">Ask Your Question</h1>
      <h2 className="title">about the {productData.name}</h2>
    </header>



       <form>
        <label> <strong>Your Question</strong></label><br></br>
        <textarea placeholder="Type your question here" required="required" rows="7" cols="50" maxLength="1000" onChange={(e)=> setAskQuestionData({...askQuestionData, body: e.target.value, product_id: productData.id })}></textarea><br></br><br></br>
        <label>What is your nickname?</label><br></br>
        <input type="text" placeholder="Example: jackson11!"
required="required" onChange={(e)=> setAskQuestionData({...askQuestionData, name: e.target.value })}></input><br></br>
         <small>*For privacy reasons, do not use your full name or email address</small><br></br><br></br>
         <label>Your email</label><br></br>
        <input type="text" placeholder="Why did you like the product or not?"
required="required" onChange={(e)=> setAskQuestionData({...askQuestionData, email: e.target.value })}></input><br></br>
         <small>*For authentication reasons, you will not be emailed</small><br></br><br></br>

       </form><br></br>

      <Button type="submit" onClick={handleSubmit}>Submit</Button>
      <Button type="button" onClick={() => setOpenModal(false)}>Cancel</Button>
    </Modalpop>
    <ModalOverlay className="modal-overlay"></ModalOverlay>
  </div>
  </MainContainer>
)

export default Modal;
