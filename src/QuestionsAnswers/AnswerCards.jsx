import React, { useEffect, useState } from 'react';
import { Container } from './styles/Main.styled.js';
import PhotoCard from './PhotoCard.jsx';
import axios from 'axios';
import {API_KEY} from '../../config.js';
import Moment from 'react-moment';
import {ReportorHelp} from './styles/Report.styled.js';


export default function Answers(props) {
  const [listLength, setListLength] = useState(2);
  const [noMoreAs, setNoMoreAs] = useState(false);


  const incrementListLength = () => {
    console.log(Object.keys(props.answers).length);
    if (listLength >= Object.keys(props.answers).length - 2) {
      setNoMoreAs(true);

    }
    setListLength(listLength + 2);
  };

  const handleReportClick = (e, answerId) => {
     e.target.innerText = 'Reported';


    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answerId}/report`, {reported: true}, {
      headers: {
        Authorization: API_KEY,
        'Content-Type': 'application/json',
      },
    }).then((response) => {


      console.log(response)
    }).catch((error) => { console.log(error); });
  };




    if (props) {

      const displayAnswers = (props) => {
      const answers = Object.entries(props.answers);
      return (
        answers.slice(0, listLength).sort((a, b) => (a[1].helpfulness > b[1].helpfulness ? -1 : 1)).map((answer, index) => {
          let person = answer[1].answerer_name;





            if (answer[1].answerer_name.toLowerCase() === 'seller') {
            person = <b>{answer[1].answerer_name.charAt(0).toUpperCase() + answer[1].answerer_name.slice(1)}</b>;
            // console.log('this is the', answer[1].answerer_name)
          }


          return (
            <div className="answer" key={answer[0]}>
              <div>
                <pre>
                  <strong>A:</strong>
                  {' '}
                  <small>{answer[1].body}</small>
                </pre>
              </div>

              <PhotoCard photos={answer[1].photos} />
              <small>
                <pre> by {person}
                  , <Moment format="MMMM DD, YYYY" date={answer[1].date} /> {' '}
                  | Helpful?
                  <ReportorHelp className="helpful" onClick={() => props.handleHelpfulAnswerSubmit(answer[0], answer[1].helpfulness)}> Yes(
                    {answer[1].helpfulness}
                    ) |
                  </ReportorHelp>
                  {' '} <ReportorHelp onClick={(e) => handleReportClick(e, answer[0])}>Report</ReportorHelp>

                </pre>

              </small>
              <br />
            </div>

          );
        })
      );


      }


  return (
    <>
      {displayAnswers(props)}

      {!noMoreAs && <button onClick={incrementListLength}>See More Answers</button>}

    </>
  );
}
   else {
    return (
      <p>No Answers Posted At This Time.</p>
    );

}
}
