import React from 'react';

export default function Answers(props) {
  console.log(Object.entries(props.answers));
  // let answers = Object.entries(props.answers);
  const displayAnswers = (props) => {
    const answers = Object.entries(props.answers);
    let count = 0;
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
              <small><pre>by {person}, {answer[1].date} | Helpful? <span onClick={() =>{console.log('yes answer test')}}>Yes({answer[1].helpfulness}) |</span> <span onClick={() =>{console.log('report test')}}>Report</span>
                </pre></small>
            </div>
          );
        })
      );
    }
    return (
      <p>No Answers Posted At This Time.</p>
    );
  };
  return (
    <>
      {displayAnswers(props)}
    </>
  );
}
