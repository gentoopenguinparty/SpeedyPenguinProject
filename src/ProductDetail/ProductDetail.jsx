import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { axiosGet } from '../../util';

export default function ProductDetail() {

  axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=37311')
    // .then((data) => console.log(data))
    .catch((err) => console.log(err));
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = () => {
    setSearchParams('123');
  };
  return (
    <>
      <p>{searchParams}</p>
      <p>qqwdqwd</p>
      <button onClick={handleClick} type="button" value="click" />
    </>
  );
}
