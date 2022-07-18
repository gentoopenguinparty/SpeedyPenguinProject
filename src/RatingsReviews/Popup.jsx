import React, { useEffect, useState } from 'react'
import { PopupOuter } from './styles/PopupOuter.styled.js'
import { PopupInner } from './styles/PopupInner.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'

export default function Popup(props) {

  return (props.trigger) ? (
    <PopupOuter>
      <PopupInner>

            {props.children}
            <button onClick={() => { props.changeTrigger(false); props.incCount(); }}>X</button>

      </PopupInner>
    </PopupOuter>
  ) : null
}