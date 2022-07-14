var sortNew = function(array) {
  // set a counter = 0
  var count = 0;
  console.log('inside Function', array[0].date);
  // Create a for loop that goes through the entire array
  for (var i = 0; i < array.length - 1; i++) {
    // console.log('for', array[i + 1].date.slice(0,4), array[i].date.slice(0,4) )
    console.log(JSON.stringify(array), i)
    if (parseInt(array[i + 1].date.slice(0,4)) > parseInt(array[i].date.slice(0,4))) {
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
    console.log(array);
    return;
  }
  // if counter > 0
  if (count > 0) {
    // run sortNew again with the current array
    sortNew(array);
}
return;
}

data=[{date: '2022-01-03T00:00:00.000Z'} ,{date: "2022-01-03T00:00:00.000Z"},{date: "2021-11-09T00:00:00.000Z"},{date: "2022-01-07T00:00:00.000Z"},{date: "2022-05-30T00:00:00.000Z"}]

sortNew(data);