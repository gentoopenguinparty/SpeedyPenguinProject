import React, { useEffect, useState } from 'react'
import { PopupOuter } from './styles/PopupOuter.styled.js'
import { PopupInner } from './styles/PopupInner.styled.js'
import { useStore } from './tracker.jsx'

export default function Popup(props) {
  const tracker =  useStore((state) => state.increaseCount)

  return (props.trigger) ? (
    <PopupOuter>
      <PopupInner>
        {props.children}
        <button onClick={() => {props.changeTrigger(false); tracker()}}>Close!</button>
      </PopupInner>
    </PopupOuter>
  ) : null
}