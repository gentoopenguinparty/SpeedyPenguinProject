import React, { useEffect, useState } from 'react'
import { PopupOuter } from './styles/PopupOuter.styled.js'

export default function Popup(props) {
  return (props.trigger) ? (
    <PopupOuter>
      {props.children}
    </PopupOuter>
  ) : null
}