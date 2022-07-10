import React, { useEffect, useState } from 'react'
let axios = require('axios');

export default function bigList() {

  function handleGet() {
    return (
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=37315')
    );
  };

  useEffect(() => {
    handleGet()
      .then((getData) = {
        // var [data, modData] = useState();
      })
  }, [])

  return (

  )
}