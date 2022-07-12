import React from 'react';
import AnswerCard from './AnswerCards.jsx';

export default function QAcard(props) {
  console.log('props', props.qaCards);

  const displayQAcards = (props) => {
    const { qaCards } = props;

    if (qaCards.length > 0) {
      return (
        qaCards.sort((a, b) => a.question_helpfulness > b.question_helpfulness ? -1 : 1).map((qaCard, index) => {
          console.log(qaCard);
          return (
            <div className="QAcard" key={qaCard.question_id}>
              <h3>
                Q:
                {' '}
                {qaCard.question_body}
              </h3>
              <small>
                <pre>
                  Helpful?  Yes(
                  {qaCard.question_helpfulness}
                  )  |  Add Answer
                </pre>
              </small>
              <AnswerCard answers={qaCard.answers} />
            </div>
          );
        })
      );
    }
    return (
      <p>No Questions Asked At This Time</p>
    );
  };
  return (
    <>

      {displayQAcards(props)}

    </>
  );
}
