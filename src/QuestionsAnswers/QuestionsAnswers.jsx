import React from 'react'
import {axiosGet, axiiosPost} from '../../util';

export default function QuestionsAnswers() {
  // const [data, setdata] = useState(null);
  // const [error, setError] = useState("");
  // const [loaded, setLoaded] = useState(false); //hr-rfe

    let param = 37315;
    axiosGet(`https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfe/qa/questions/?product_id=${param}`).then((data)=> {
      console.log(data);
    });


  return (

  <div>
     <p>Questions and Answers</p>

     <input placeholder="Have A Question? Search For Answers..." />
     <button type="submit">Search</button>
     <br></br>

     <textarea>

     </textarea>
  </div>
)


};