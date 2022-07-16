
import AnswerCards from './AnswerCards.jsx';
import React, { useEffect, useState } from 'react';
import {Container} from './styles/Main.styled.js'
// import {qListLength, setQListLength} from '../QuestionsAnswers/QuestionsAnswers.jsx'

export default function QAcard(props) {




  const displayQAcards = (props) => {
    console.log(props)




    const { qaCards } = props;
    if (qaCards.length > 0) {


      return (
        qaCards.slice(0, props.qListLength ).filter(qaCard => qaCard.question_body.toLowerCase().includes(props.search.toLowerCase())).sort((a, b) => a.question_helpfulness > b.question_helpfulness ? -1 : 1).map((qaCard, index) => {

          return (
            <div className="QAcard" key={qaCard.question_id}>
              <h3>
                Q:
                {' '}
                {qaCard.question_body}
              </h3>
              <small>
                <pre>
                  Helpful? <span onClick={() => { console.log('yes question test') }}>Yes(
                    {qaCard.question_helpfulness}
                    ) |</span>  <span onClick={() => { console.log('Add answer test') }}>Add Answer</span>
                </pre>
              </small>
              <AnswerCards answers={qaCard.answers} />
            </div>
          );
        })

      );
    }

    return (
      <>
      <h3>No Questions Asked At This Time</h3>
      <button onClick={() => { console.log('Add answer test') }}>Add Answer</button>
      </>

    );
  };
  return (
    <>

      {displayQAcards(props)}

    </>
  );
}
