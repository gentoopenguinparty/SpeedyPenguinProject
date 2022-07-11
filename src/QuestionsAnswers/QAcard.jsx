import React from 'react';
import AnswerCard from './AnswerCards.jsx';

export default function QAcard(props) {
  console.log('props', props.qaCards);

  const displayQAcards = (props) => {
    const { qaCards } = props;

    if (qaCards.length > 0) {
      return (
        qaCards.map((qaCard, index) => {
          console.log(qaCard);
          return (
            <div className="QAcard" key={qaCard.question_id}>
              <h3>
                Q:
                {' '}
                {qaCard.question_body}
              </h3>
              <small>
                Helpful?  Yes(
                {qaCard.question_helpfulness}
                )  |  Add Answer
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
