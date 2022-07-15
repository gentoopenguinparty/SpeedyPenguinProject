
import React, { useEffect, useState } from 'react';
import { axiosGet, axiosPost } from '../../util';
import QAcard from '../QuestionsAnswers/QAcard.jsx';
import { ThemeProvider } from 'styled-components'
import {Container} from './styles/Main.styled.js'




export default function QuestionsAnswers() {
  const [data, setData] = useState('');
  const [search, setSearch] = useState(``)
  const [noMoreQs, setNoMoreQs] = useState(false);
  const [qListLength, setQListLength] = useState(4)

  //const [dataLength, setDataLength] = useState()
  // const [error, setError] = useState("");
  // const [loaded, setLoaded] = useState(false); //hr-rfe

  useEffect(() => {
    getQAs();
  }, []);



  const incrementQList = () => {
    console.log(data.length);
    if (qListLength >= data.length -2) {
      setNoMoreQs(true);
    }

    setQListLength(qListLength + 2)

  }


  const param = 37325;

  const getQAs = () => axiosGet(`https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfe/qa/questions/?product_id=${param}`).then((response) => {
    // console.log(response.data.results);
    const allData = response.data.results;
    setData(allData);
  }).then((data) =>{if (data.length <= 4) {setNoMoreQs(true)}}).catch((error) => { console.error(`Error, ${error}`); });

  console.log('data:', data.length);
  // only four questions with two answers per question will be rendered  onChange={e => setSearch(e.target.value)}
  //

  return (

    <Container data-testid={'QA'}>
      <h2 onClick={() => {console.log('h2 test')}}>Questions and Answers</h2>

      <input placeholder="Have A Question? Search For Answers..." onChange={e => setSearch(e.target.value)} />

      <br/>

      <QAcard qaCards={data} search={search} noMoreQs={noMoreQs} qListLength={qListLength} />
      <br></br>
      <br></br>
      <>
      {/* <button onClick={() =>{setLoadMoreQs(true)}}>Load More Questions</button> */}
      {!noMoreQs && <button  onClick={incrementQList}>Load More Questions</button>}
      </>

    </Container>
  );
}

