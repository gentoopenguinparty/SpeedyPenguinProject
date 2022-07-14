import React, { useState } from 'react';
import styled from 'styled-components';

export default function DropDown() {
  const [active, setActive] = useState(false);
  return (
    <div >
      <div onClick={() => { setActive(a => !a) }} > Choose </div>
      {active ?
        <div>
          <div className='item1'>
            React
          </div>
          <div className='item2'>
            React2
          </div>
        </div> : null}
    </div>
  )
}
