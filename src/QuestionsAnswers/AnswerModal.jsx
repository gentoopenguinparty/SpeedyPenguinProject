import React from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';
import { MainContainer } from './styles/Main.styled.js';
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

function AnswerModal({
  openAnswerModal, setOpenAnswerModal, productData, setAnswerData, answerData, handleAnswerSubmit, data,
}) {
  return (
    <MainContainer>
      <div className="modal">
        <div className="modal-pop" role="dialog" aria-modal="true">
          <header>
            <h1 className="title">Submit Your Answer</h1>
            <h2 className="title">
              {productData.name}
              :
              {' '}
              {data[0].question_body}
            </h2>
          </header>

          <form>
            <label>
              {' '}
              <strong>Your Answer</strong>
            </label>
            <br />
            <textarea placeholder="Type your question here" required="required" rows="7" cols="50" maxLength="1000" onChange={(e) => setAnswerData({ ...answerData, body: e.target.value })} />
            <br />
            <br />
            <label>What is your nickname?</label>
            <br />
            <input
              type="text"
              placeholder="Example: jackson11!"
              required="required"
              onChange={(e) => setAnswerData({ ...answerData, name: e.target.value })}
            />
            <br />
            <small>*For privacy reasons, do not use your full name or email address</small>
            <br />
            <br />
            <label>Your email</label>
            <br />
            <input
              type="text"
              placeholder="Why did you like the product or not?"
              required="required"
              onChange={(e) => setAnswerData({ ...answerData, email: e.target.value })}
            />
            <br />
            <small>*For authentication reasons, you will not be emailed</small>
            <br />
            <br />

          </form>
          <br />
          <button onClick={() => { console.log('add photos here'); }}>Upload Photos</button>
          <button type="submit" onClick={handleAnswerSubmit}>Submit</button>
          <button type="button" onClick={() => setOpenAnswerModal(false)}>Cancel</button>
        </div>
        <div className="modal-overlay" />
      </div>
    </MainContainer>
  );
}

export default AnswerModal;
