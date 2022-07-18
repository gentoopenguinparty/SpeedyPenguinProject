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
    // console.log(JSON.stringify(array))
    return;
  }
  // if counter > 0
  if (count > 0) {
    // run sortNew again with the current array
    sortHelpful(array);
  }
  return;
}

data=[{helpfulness: 32} ,{helpfulness: 8},{helpfulness: 28},{helpfulness: 1},{helpfulness: 3}]

sortHelpful(data);