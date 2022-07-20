import React, { useEffect, useState } from 'react';
import AnswerCards from './AnswerCards.jsx';
import { Container } from './styles/Main.styled.js';
import AnswerModal from './AnswerModal.jsx';
import axios from 'axios';
import {API_KEY} from '../../config.js'
// import {qListLength, setQListLength} from '../QuestionsAnswers/QuestionsAnswers.jsx'

export default function QAcard(props) {

  // const [reportedQ, setReportedQ] = useState('Report');


  // const displayQAcards = (props) => {
    // console.log('props', props)
    //const [reportedQ, setReportedQ] = useState(false);

    const handleQuestionReport = (e, questionId) => {
       e.target.innerText = 'Reported';
      //console.log(questionId);

      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${questionId}/report`,{reported: true}, {
        headers: {
          Authorization: API_KEY,
          'Content-Type': 'application/json',
        },
      }).then((response) => {
       console.log(response);


      }).catch((error) => { console.log(error); });
    }

    //console.log('props', props)
    if (props.qaCards) {
      const { qaCards } = props;
      return (
        qaCards.slice(0, props.qListLength).filter((qaCard) => qaCard.question_body.toLowerCase().includes(props.search.toLowerCase())).sort((a, b) => (a.question_helpfulness > b.question_helpfulness ? -1 : 1)).map((qaCard, index) => (
          //console.log('test')
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
                <span onClick={() => props.handleHelpfulQuestionSubmit(qaCard.question_id, qaCard.question)}>
                  Yes(
                  {qaCard.question_helpfulness}
                  ) |
                </span>
                {' '}

                <span onClick={() => props.handleQuestionId(qaCard.question_id)}>Add Answer</span> | <span onClick={(e) => handleQuestionReport(e, qaCard.question_id)}>Report</span>

              </pre>
            </small>
            <br />
            <AnswerCards answers={qaCard.answers} handleHelpfulAnswerSubmit={props.handleHelpfulAnswerSubmit}/>
            <br />
          </div>
        ))

      );
    }

    return (
      <h3>No Questions Asked At This Time</h3>

    );
  };
  // return (
  //   <>

  //     {displayQAcards(props)}

  //   </>
  // );

