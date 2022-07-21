import React from 'react';
import {Modalpop, ModalOverlay, ButtonM} from './styles/Modal.styled.js'
import ReactDOM from 'react-dom';
import { MainContainer } from './styles/Main.styled.js';
import { API_KEY } from '../../config';
import PhotoCard from './PhotoCard.jsx'





function AnswerModal({
  openAnswerModal, setOpenAnswerModal, productData, setAnswerData, answerData, handleAnswerSubmit, data
}) {

  const {photos} = answerData;
  let noMorePhotos = false;
  if (photos.length >= 5) {
    noMorePhotos = true;
  }
  console.log(photos)
  return (
    <MainContainer>
      <div className="modal">
        <Modalpop className="modal-pop" role="dialog" aria-modal="true">
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
            <label >
              {' '}
              <strong>Your Answer*</strong>
            </label>
            <br />
            <textarea placeholder="Type your question here" required="required" rows="7" cols="50" maxLength="1000" onChange={(e) => setAnswerData({ ...answerData, body: e.target.value })} /><br></br>
            <small>(1000 Characters Max)</small><br></br>
            <br />
            <br />
            <label>What is your nickname?*</label>
            <br />
            <input
              type="text"
              placeholder="Example: jackson11!        "
              required="required"
              maxLength="60"
              onChange={(e) => setAnswerData({ ...answerData, name: e.target.value })}
            />
            <br />
            <small>(60 Characters Max)</small><br></br>
            <small>*For privacy reasons, do not use your full name or email address</small>
            <br />
            <br />
            <label>Your email*</label>
            <br />

            <input
              type="text"
              placeholder="Why did you like the product or not?"
              required="required"
              maxLength="60"
              onChange={(e) => setAnswerData({ ...answerData, email: e.target.value })}
            /><br></br>
             <small>(60 Characters Max)</small>
            <br />
            <small>*For authentication reasons, you will not be emailed</small>
            <br />
            <br />


          </form>
          <br />
            <small>Upload Photos</small><br></br>
          {!noMorePhotos && <input type="file" onChange={(e)=> photos.push(URL.createObjectURL(e.target.files[0])) }/>}<br></br>
          <PhotoCard photos={answerData.photos}></PhotoCard><br></br><br></br><br></br>

          <ButtonM type="submit" onClick={handleAnswerSubmit}>Submit</ButtonM>
          <ButtonM type="button" onClick={() => setOpenAnswerModal(false)}>Cancel</ButtonM>
        </Modalpop>
        <ModalOverlay className="modal-overlay" />
      </div>
    </MainContainer>
  );
}

export default AnswerModal;
//setAnswerData({...answerData, photos: [URL.createObjectURL(e.target.files[0])]})