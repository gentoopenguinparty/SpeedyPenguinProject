import React from 'react';
import {useEffect, useState} from 'react'
export default function Answers(props) {

  const [loadMoreAs, setLoadMoreAs] = useState(false)
// console.log(props)
  const handleReportClick = (e) => {
    console.log('report clicked lets make an axios req to update data', props)
  }

  const displayAnswers = (props) => {
    const answers = Object.entries(props.answers);
    if (loadMoreAs === true) {
    if (answers.length > 0) {

      return (
        answers.sort((a, b) => a.helpfulness > b.helpfulness ? -1 : 1).map((answer, index) => {
          let person = answer[1].answerer_name;
          if (answer[1].answerer_name === 'seller') {
             person = <b>{answer[1].answerer_name}</b>
            console.log('this is a seller', answer[1].answerer_name)
          }

          return (
            <div className="answer" key={answer[0]}>
              <h3> A: <small>{answer[1].body}</small></h3>
              <small><pre>by {person}, {answer[1].date} | Helpful? <span onClick={() =>{console.log('yes answer test')}}>Yes({answer[1].helpfulness}) |</span> <span onClick={handleReportClick}>Report</span>
                </pre></small>
            </div>
          );
        })
      );
    }
  } else {
    if (answers.length > 0) {

      //console.log(answers);
      return (
        answers.slice(0,2).sort((a, b) => a.helpfulness > b.helpfulness ? -1 : 1).map((answer, index) => {
          let person = answer[1].answerer_name;
          if (answer[1].answerer_name === 'seller') {
             person = <b>{answer[1].answerer_name}</b>
            console.log('this is a seller', answer[1].answerer_name)
          }

          return (
            <div className="answer" key={answer[0]}>
              <h3> A: <small>{answer[1].body}</small></h3>
              <small><pre>by {person}, {answer[1].date} | Helpful? <span onClick={() =>{console.log('yes answer test')}}>Yes({answer[1].helpfulness}) |</span> <span onClick={handleReportClick}>Report</span>
                </pre></small>
                {/* <button onClick={() =>{setLoadMoreAs(true)}}>Load More Answers</button> */}
            </div>
          );
        })
      );
    }
  }
    return (
      <p>No Answers Posted At This Time.</p>
    );
  };
  return (
    <>
      {displayAnswers(props)}
      <button onClick={() =>{setLoadMoreAs(true)}}>Load More Answers</button>
    </>
  );
}
