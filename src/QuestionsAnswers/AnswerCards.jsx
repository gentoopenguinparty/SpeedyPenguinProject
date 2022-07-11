import React from 'react';

export default function Answers(props) {
  console.log(Object.entries(props.answers));
  // let answers = Object.entries(props.answers);
  const displayAnswers = (props) => {
    const answers = Object.entries(props.answers);

    if (answers.length > 0) {
      return (
        answers.map((answer, index) => {
          console.log('map answer', answer);
          return (
            <div className="answer" key={answer[0]}>
              <p>
                A: {answer[1].body}
              </p>
              <small>by {answer[1].answerer_name}, {answer[1].date}</small>
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
