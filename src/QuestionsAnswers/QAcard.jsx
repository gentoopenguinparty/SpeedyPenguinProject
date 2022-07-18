import React, { useEffect, useState } from 'react';
import AnswerCards from './AnswerCards.jsx';
import { Container } from './styles/Main.styled.js';
import AnswerModal from './AnswerModal.jsx';
// import {qListLength, setQListLength} from '../QuestionsAnswers/QuestionsAnswers.jsx'

export default function QAcard(props) {
  const displayQAcards = (props) => {
    // console.log('props', props)

    const { qaCards } = props;
    if (qaCards.length > 0) {
      // console.log(qaCards)
      return (
        qaCards.slice(0, props.qListLength).filter((qaCard) => qaCard.question_body.toLowerCase().includes(props.search.toLowerCase())).sort((a, b) => (a.question_helpfulness > b.question_helpfulness ? -1 : 1)).map((qaCard, index) => (
          <div className="QAcard" key={qaCard.question_id}>
            <h3>
              Q:
              {' '}
              {qaCard.question_body}
            </h3>
            <small>
              <pre>
                Helpful?
                {' '}
                <span onClick={() => { console.log('yes question test'); }}>
                  Yes(
                  {qaCard.question_helpfulness}
                  ) |
                </span>
                {' '}
                <span onClick={() => props.handleQuestionId(qaCard.question_id)}>Add Answer</span>
                <p>{qaCard.question_id}</p>
              </pre>
            </small>
            <br />
            <AnswerCards answers={qaCard.answers} />
            <br />
          </div>
        ))

      );
    }

    return (
      <h3>No Questions Asked At This Time</h3>

    );
  };
  return (
    <>

      {displayQAcards(props)}

    </>
  );
}
