import React from 'react';
import {useEffect, useState} from 'react'
import {Container} from './styles/Main.styled.js'
import PhotoCard from './PhotoCard.jsx'

export default function Answers(props) {
  const [listLength, setListLength] = useState(2)
  const [noMoreAs, setNoMoreAs] = useState(false)
  const [photos, setPhotos] = useState([])

  const incrementListLength = () => {
    // console.log(Object.keys(props.answers).length);
    if (listLength >= Object.keys(props.answers).length -2) {
      setNoMoreAs(true)
    }
    setListLength(listLength + 2)
  }

  const handleReportClick = (e) => {
    // console.log('report clicked lets make an axios req to update data', props)
  }

  const displayAnswers = (props) => {
    const answers = Object.entries(props.answers);

    // let photos = answers[1].photos;
    // setPhotos(photos);
    if (answers.length > 0) {
      return (
        answers.slice(0, listLength).sort((a, b) => a.helpfulness > b.helpfulness ? -1 : 1).map((answer, index) => {
          let person = answer[1].answerer_name;


          // setPhotos(photos);
         // // console.log(photos)


          if (answer[1].answerer_name.toLowerCase() === 'seller') {
             person = <b>{answer[1].answerer_name.charAt(0).toUpperCase() + answer[1].answerer_name.slice(1)}</b>
            // console.log('this is the', answer[1].answerer_name)
          }

          let date = new Date(answer[1].date).toLocaleDateString(
            'en-gb',
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }
          );
          return (
            <div className="answer" key={answer[0]} >
              <div><pre><strong>A:</strong> <small>{answer[1].body}</small></pre></div>

              <PhotoCard photos={answer[1].photos}/>
              <small><pre>by {person}, {date} | Helpful? <span onClick={() =>{ console.log('yes answer test')}}>Yes({answer[1].helpfulness}) |</span> <span onClick={handleReportClick}>Report</span>
                </pre></small><br></br>
            </div>
          );
        })
      );
    }
  //  else {
  //   if (answers.length > 0) {
  //     if (answers.length === 1) {
  //       setLoadMoreAs(true);
  //     }
  //     //// console.log(answers);
  //     return (

  //       answers.slice(0,listLength).sort((a, b) => a.helpfulness > b.helpfulness ? -1 : 1).map((answer, index) => {
  //         let person = answer[1].answerer_name;
  //         if (answer[1].answerer_name.toLowerCase() === 'seller') {

  //            person = <b>{answer[1].answerer_name.charAt(0).toUpperCase() + answer[1].answerer_name.slice(1) }</b>
  //           // console.log('this is a seller', answer[1].answerer_name)
  //         }

  //         return (
  //           <div className="answer" key={answer[0]}>
  //             <h3> A: <small>{answer[1].body}</small></h3>
  //             <small><pre>by {person}, {answer[1].date} | Helpful? <span onClick={() =>{// console.log('yes answer test')}}>Yes({answer[1].helpfulness}) |</span> <span onClick={handleReportClick}>Report</span>
  //               </pre></small>
  //               {/* <button onClick={() =>{setLoadMoreAs(true)}}>Load More Answers</button> */}
  //           </div>
  //         );
  //       })
  //     );
  //   }
  // }
    return (
      <p>No Answers Posted At This Time.</p>
    );
  };
  return (
    <>
      {displayAnswers(props)}

      {!noMoreAs && <button  onClick={incrementListLength}>Load More Answers</button>}
      {/* <button onClick={() =>{setLoadMoreAs(true)}}>Load More Answers</button> */}
    </>
  );
}
