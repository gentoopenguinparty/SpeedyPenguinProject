import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Triangle } from './styles/Triangle.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'

export default function DropDown({ modData, apiData }) {
  const [active, setActive] = useState(false);
  const [filter, setFilter] = useState('relevence')

  var sortHelpful = function (array) {
    // set a counter = 0
    var count = 0;
    // console.log('array', array)
    // console.log('inside Function help', array[0].helpfulness);
    // Create a for loop that goes through the entire array
    for (var i = 0; i < array.length - 1; i++) {
      // console.log('for', array[i + 1].helpfulness, array[i].helpfulness)
      if (array[i + 1].helpfulness > array[i].helpfulness) {
        // swap the values around
        var currentVal = array[i];
        array[i] = array[i + 1];
        array[i + 1] = currentVal;
        // increment a counter
        count++;
      }
    }
    // if counter = 0
    if (count === 0) {
      // then return the sorted array
      modData([...array]);
      // console.log('help')
      return;
    }
    // if counter > 0
    if (count > 0) {
      // run sortNew again with the current array
      sortHelpful(array);
    }
    return;
  }

  var sortRelevent = function (array) {
    // set a counter = 0
    var count = 0;
    // Create a for loop that goes through the entire array
    for (var i = 0; i < array.length - 1; i++) {
      // Compare current index value to the neighboring index
      // if current index is greater than neighboring index
      if (array[i].photos.length < array[i + 1].photos.length) {
        // swap the values around
        var currentVal = array[i];
        array[i] = array[i + 1];
        array[i + 1] = currentVal;
        // increment a counter
        count++;
      }
    }
    // if counter = 0
    if (count === 0) {
      // then return the sorted array
      return array;
    }
    // if counter > 0
    if (count > 0) {
      // run bubbleSort again with the current array
      sortRelevent(array);
    }
    return array;
  }


  var sortNew = function (array) {
    // set a counter = 0
    var count = 0;
    // console.log('inside Function', array[0].date);
    // Create a for loop that goes through the entire array
    for (var i = 0; i < array.length - 1; i++) {
      // console.log('for', array[i + 1].date.slice(0, 4), array[i].date.slice(0, 4))
      if (parseInt(array[i + 1].date.slice(0, 4)) > parseInt(array[i].date.slice(0, 4))) {
        // swap the values around
        var currentVal = array[i];
        array[i] = array[i + 1];
        array[i + 1] = currentVal;
        // increment a counter
        count++;
      }
      if ((parseInt(array[i + 1].date.slice(0, 4)) === parseInt(array[i].date.slice(0, 4))) &&
      (parseInt(array[i + 1].date.slice(5, 7)) > parseInt(array[i].date.slice(5, 7)))) {
        // swap the values around
        var currentVal = array[i];
        array[i] = array[i + 1];
        array[i + 1] = currentVal;
        // increment a counter
        count++;
      }
      if ((parseInt(array[i + 1].date.slice(0, 4)) === parseInt(array[i].date.slice(0, 4))) &&
      (parseInt(array[i + 1].date.slice(5, 7)) === parseInt(array[i].date.slice(5, 7))) &&
      (parseInt(array[i + 1].date.slice(8, 10)) > parseInt(array[i].date.slice(8, 10)))) {
        // swap the values around
        var currentVal = array[i];
        array[i] = array[i + 1];
        array[i + 1] = currentVal;
        // increment a counter
        count++;
      }

    }
    // if counter = 0
    if (count === 0) {
      // then return the sorted array
      modData([...array]);
      return;
    }
    // if counter > 0
    if (count > 0) {
      // run sortNew again with the current array
      sortNew(array);
    }
    return;
  }

  useEffect(() => {
    console.log('sortsort')
    sortRelevent(apiData)
  },[])

  return (
    <div >
      <Row align={'align-center'} >
        <div onClick={() => { setActive(a => !a) }} > sorted by {filter}</div>
        <Triangle data-testid="triangle" marginTop={3} onClick={() => { setActive(a => !a) }} ></Triangle>
      </Row>
      {active ?
        <DropList>
          <div data-testid="relevence" onClick={() => { setFilter('relevance'); sortRelevent(apiData) }}>
            relevance
          </div>
          <div data-testid="newest" onClick={() => { setFilter('newest'); sortNew(apiData) }}>
            newest
          </div>
          <div data-testid="helpful" onClick={() => { setFilter('helpful'); sortHelpful(apiData)}}>
            helpful
          </div>
        </DropList>
        : null}
    </div>
  )
}

const DropList = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;

`;