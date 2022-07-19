import React, { useEffect, useState } from 'react';
import { Container } from './styles/Main.styled.js';
import PhotoCard from './PhotoCard.jsx';
import axios from 'axios';
import {API_KEY} from '../../config.js'

export default function Answers(props) {
  const [listLength, setListLength] = useState(2);
  const [noMoreAs, setNoMoreAs] = useState(false);
  const [photos, setPhotos] = useState([]);

  const incrementListLength = () => {
    console.log(Object.keys(props.answers).length);
    if (listLength >= Object.keys(props.answers).length - 2) {
      setNoMoreAs(true);
    }
    setListLength(listLength + 2);
  };

  const handleReportClick = (answerId) => {
    console.log(answerId)
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answerId}/report`, {reported: true}, {
      headers: {
        Authorization: API_KEY,
        'Content-Type': 'application/json',
      },
    }).then((response) => {
     console.log(response);
    }).catch((error) => { console.log(error); });
  };

  const displayAnswers = (props) => {
    const answers = Object.entries(props.answers);

    // let photos = answers[1].photos;
    // setPhotos(photos);
    if (answers.length > 0) {
      console.log(answers)
      return (
        answers.slice(0, listLength).sort((a, b) => (a.helpfulness > b.helpfulness ? -1 : 1)).map((answer, index) => {
          let person = answer[1].answerer_name;

          // setPhotos(photos);
          // console.log(photos)

          if (answer[1].answerer_name.toLowerCase() === 'seller') {
            person = <b>{answer[1].answerer_name.charAt(0).toUpperCase() + answer[1].answerer_name.slice(1)}</b>;
            // console.log('this is the', answer[1].answerer_name)
          }

          const date = new Date(answer[1].date).toLocaleDateString(
            'en-gb',
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            },
          );
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
                  , {date} {' '}
                  | Helpful?
                  <span onClick={() => props.handleHelpfulAnswerSubmit(answer[0], answer[1].helpfulness)}> Yes(
                    {answer[1].helpfulness}
                    ) |
                  </span>
                  {' '}<span onClick={() => handleReportClick(answer[0])}>Report</span>
                </pre>

              </small>
              <br />
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

      {!noMoreAs && <button onClick={incrementListLength}>Load More Answers</button>}
      {/* <button onClick={() =>{setLoadMoreAs(true)}}>Load More Answers</button> */}
    </>
  );
}
