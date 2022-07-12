import React from 'react';

export default function Answers(props) {
  console.log(Object.entries(props.answers));
  // let answers = Object.entries(props.answers);
  const displayAnswers = (props) => {
    const answers = Object.entries(props.answers);

    if (answers.length > 0) {
      return (
        answers.sort((a, b) => a.helpfulness > b.helpfulness ? 1 : -1)map((answer, index) => {
          console.log('map answer', answer);
          return (
            <div className="answer" key={answer[0]}>
              <h3> A: <small>{answer[1].body}</small></h3>
              <small><pre>by {answer[1].answerer_name}, {answer[1].date} | Helpful? Yes({answer[1].helpfulness}) | Report
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
