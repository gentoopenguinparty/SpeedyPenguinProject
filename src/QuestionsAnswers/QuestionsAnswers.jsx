import React, { useEffect, useState } from 'react';
import { axiosGet, axiosPost } from '../../util';
import QAcard from '../QuestionsAnswers/QAcard.jsx';

export default function QuestionsAnswers() {
  const [data, setData] = useState('');
  // const [error, setError] = useState("");
  // const [loaded, setLoaded] = useState(false); //hr-rfe

  useEffect(() => {
    getQAs();
  }, []);

  const param = 37318;

  const getQAs = () => axiosGet(`https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfe/qa/questions/?product_id=${param}`).then((response) => {
    // console.log(response.data.results);
    const allData = response.data.results;
    setData(allData);
  }).catch((error) => { console.error(`Error, ${error}`); });

  console.log('data:', data);
  // only four questions with two answers per question will be rendered
  //
  return (

    <div data-testid={'QA'}>
      <h2>Questions and Answers</h2>

      <input placeholder="Have A Question? Search For Answers..." />
      <button type="submit">Search</button>
      <br />

      <QAcard qaCards={data} />

    </div>
  );
}
