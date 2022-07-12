import React, { useEffect, useState } from 'react'
import { PopupOuter } from './styles/PopupOuter.styled.js'
import { PopupInner } from './styles/PopupInner.styled.js'


export default function Popup(props) {

  return (props.trigger) ? (
    <PopupOuter>
      <PopupInner>
        {props.children}
        <button onClick={() => {props.changeTrigger(false); props.incCount();}}>Close!</button>
      </PopupInner>
    </PopupOuter>
  ) : null
}