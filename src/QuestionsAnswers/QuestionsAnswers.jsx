
import React, { useEffect, useState } from 'react';
import { axiosGet, axiosPost } from '../../util';
import QAcard from '../QuestionsAnswers/QAcard.jsx';
import { ThemeProvider } from 'styled-components'
import {ScrollContainer} from './styles/Scroll.styled.js'
import {MainContainer} from './styles/Main.styled.js'
import {Button} from './styles/Button.styled.js'
import {SearchBar} from './styles/SearchBar.styled.js'
import {SearchIcon} from './styles/SearchIcon.styled.js'
import {Wrapper} from './styles/Wrapper.styled.js'
import Modal from '../QuestionsAnswers/Modal.jsx'
import axios from 'axios'
import {API_KEY} from '../../config.js'
import AnswerModal from '../QuestionsAnswers/AnswerModal.jsx'


export default function QuestionsAnswers() {
  const [data, setData] = useState('');
  const [search, setSearch] = useState(``)
  const [noMoreQs, setNoMoreQs] = useState(false);
  const [qListLength, setQListLength] = useState(4)
  const [openModal, setOpenModal] = useState(false);
  const [productData, setProductData] = useState('');
  const [openAnswerModal, setOpenAnswerModal] = useState(false);
 // Ask Question Data
  const [askQuestionData, setAskQuestionData] = useState({
    body: '',
    name: '',
    email: '',
    product_id: '',

  });

  const [answerData, setAnswerData] = useState({
    body: '',
    name: '',
    email: '',
    product_id: ''
  })



  //const [dataLength, setDataLength] = useState()
  // const [error, setError] = useState("");
  // const [loaded, setLoaded] = useState(false); //hr-rfe

  useEffect(() => {
    getQAs();
    getProductInfo();
    // const interval=setInterval(()=>{
    //   getQAs()
    //   getProductInfo();
    //  },10000)


    //  return()=>clearInterval(interval)

  }, []);



  const incrementQList = () => {
    console.log(data.length);
    if (qListLength >= data.length -2) {
      setNoMoreQs(true);
    }

    setQListLength(qListLength + 2)

  }

  const handleSubmit = () => {
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`, askQuestionData, {headers: {
      Authorization: API_KEY,
    }}).then((response) => {
      console.log(response)
      setOpenModal(false)
      getQAs()
    }).catch(function (error) {
      console.log('Error:', error);
    });
  }

const handleAnswerSubmit = () => {
  console.log(answerData);
  setOpenAnswerModal(false)
}


  const param = 37325;

  const getQAs = () => axiosGet(`https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfe/qa/questions/?product_id=${param}`).then((response) => {

    const allData = response.data.results;
    console.log('all data', allData)

    setData(allData);
  }).then((data) =>{if (data.length <= 4) {setNoMoreQs(true)}}).catch((error) => { console.error(`Error here, ${error}`); });

  const getProductInfo = () => axiosGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${param}`).then((response)=> {
    console.log(response.data);
    const allProData = response.data;
    setProductData(allProData);

  }).catch((error) => { console.error(`Error, ${error}`)})
  // only four questions with two answers per question will be rendered  onChange={e => setSearch(e.target.value)}
  //

  return (


   <MainContainer>

   <h2 onClick={() => {console.log('h2 test')}}>Questions & Answers</h2>
   <br></br>
   <Wrapper> <SearchBar placeholder="Have A Question? Search For Answers..." onChange={e => setSearch(e.target.value)}  />
   <SearchIcon src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" /></Wrapper>

   <br></br>
   <br></br>
   {openModal && <Modal setOpenModal={setOpenModal} openModal={openModal} productData={productData} setAskQuestionData={setAskQuestionData} askQuestionData={askQuestionData} handleSubmit={handleSubmit}/>}
   {openAnswerModal && <AnswerModal setOpenAnswerModal={setOpenAnswerModal} openAnswerModal={openAnswerModal} productData={productData} setAnswerData={setAnswerData} answerData={answerData} handleAnswerSubmit={handleAnswerSubmit} data={data} qListLength={qListLength}/>}
    <ScrollContainer data-testid={'QA'}>





      <QAcard qaCards={data} search={search} noMoreQs={noMoreQs} qListLength={qListLength} setOpenAnswerModal={setOpenAnswerModal} />
      <br></br>
      <br></br>
      <>

      </>
    </ScrollContainer>
    <br></br>
    {!noMoreQs && <Button  onClick={incrementQList}>Load More Questions</Button>}<Button onClick={() =>
      setOpenModal(true)}
    >Ask A Question</Button>




    </MainContainer>


  );
}

